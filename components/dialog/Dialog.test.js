import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

// jest.mock("react-redux/es/connect/connect", () => ({
// }));

import Dialog from './Dialog';

describe('Dialog', () => {

    it('should render correctly', () => {
        const output = shallow(
            <Dialog onClick={() => {}} onClose={() => {}} text="mock text"/>
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});