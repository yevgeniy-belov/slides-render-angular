const npm = require( "npm" );
module.exports = {
    setOptions: function ( options ) {
        options['slidesTreePath'] = `${__dirname}/tree.json`;
        options['routesListPath'] = `${__dirname}/routeList.json`;
        options['slidesListModulePathRender'] = 'node_modules/slides-render-angular/src/app/slides/slides-list.module.ts';
        options['slidesListModulePathFinder'] = 'node_modules/slides-finder/src/app/slides/slides-list.module.ts';
        options['slidesListingComponentPath'] = `.`;
        options['slidesRenderComponentPath'] = `.`;
        options['slidesDir'] = 'mockups';
        process.env['ANGULAR_PORT'] = options.ANGULAR_PORT;
        process.env['SNAPSHOTS_PORT'] = options.SNAPSHOTS_PORT;
        process.env['SERVER_PORT'] = options.SERVER_PORT;
        process.env['BASE_HREF_RENDER'] = options.BASE_HREF_RENDER;
        process.env['GH_REPOSITORY_RENDER'] = options.GH_REPOSITORY_RENDER;
    },

    run: function ( options ) {
        process.env['ANGULAR_PORT'] = options.ANGULAR_PORT;
        npm.load( () => {
            npm.run( 'startRender' );
        } );
    },

    
    deploy: function ( options ) {
        this.setOptions( options );
        npm.load( () => {
            npm.run( 'deployRender' );
        } );
    }
};
