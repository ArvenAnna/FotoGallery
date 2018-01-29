import React from 'react';
import Picture from "./picture/Picture";
import connect from "react-redux/es/connect/connect";
import {fetchAlbums, PAGE_ITEMS} from "../actions/albumActions";
import Loader from 'react-loaders';
import './albumContainer.less';
import 'loaders.css/src/animations/ball-grid-pulse.scss';
import ReactPaginate from 'react-paginate';
import LeftArrow from '../svg/left-arrow.svg';
import RightArrow from '../svg/right-arrow.svg';


@connect(store => ({
    albums: store.albums,
    isLoadingAlbums: store.isLoadingAlbums,
    itemCount: store.itemCount
}), {
    fetchAlbums
})
class AlbumContainer extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchAlbums();
    }

    handlePageClick(data) {
        let selected = data.selected;
        let offset = Math.ceil(selected * PAGE_ITEMS);
        this.props.fetchAlbums(offset);
    }


    render() {
        if(!this.props.albums) return <Loader type="ball-grid-pulse" className='Data_loader'/>;
        const pictures = this.props.albums.map(album => <Picture key={album._id}
                                                                 animation='fade'
                                                                 album={album}/>);
        const pagesCount = Math.ceil(this.props.itemCount / PAGE_ITEMS);
        return <React.Fragment>
            {pictures}
            <ReactPaginate
                           previousLabel={<LeftArrow className="arrow"/>}
                           nextLabel={<RightArrow className="arrow"/>}
                           breakLabel={<a href="">...</a>}
                           breakClassName={"break-me"}
                           pageCount={pagesCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={(data) => this.handlePageClick(data)}
                           containerClassName="P_pagination"
                           pageClassName="P_page"
                           pageLinkClassName="P_link_page"
                           previousClassName="P_prev_page"
                           nextLinkClassName="P_link_prev_page"
                           previousLinkClassName="P_link_next_page"
                           nextClassName="P_next_page"
                           subContainerClassName={"pages_pagination"}
                           activeClassName={"active"}
                           disabledClassName='disabled'
            />
        </React.Fragment>;
    }
}

export default AlbumContainer;