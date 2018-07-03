# FotoGallery
Application allows creating foto albums with name and description, add fotos and videos to album, change their order and see album in slider form.

Stack: rest API on NodeJS, MongoDB, React, Redux, less; application dockerized. All you need to run (with installed Docker before):

1. Download repository
2. Open project root directory in terminal and type:
  docker-compose build
then, after it will finish:
  docker-compose up
  
3. In order to use my db dump go indide mongo container and run:
    mongorestore --db GALLERY /dump/GALLERY/albums.bson
    mongorestore --db GALLERY /dump/GALLERY/fotos.bson
    
    To make dump go inside mongo container and run:
    mongodump
    
    dump files appear in dump directory