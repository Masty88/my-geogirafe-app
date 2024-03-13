import './style.css';
import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';
import { BasemapComponent, MapComponent, TreeViewComponent,TreeViewGroupComponent, TreeViewItemComponent,QueryBuilderComponent, ThemeComponent, ButtonComponent, GlobeComponent, SearchComponent } from '@geogirafe/lib-geoportal/components';
import { ThemesManager } from '@geogirafe/lib-geoportal/tools';

// Definition of the swiss projection
proj4.defs(
  'EPSG:2056',
  '+proj=somerc +lat_0=46.9524055555556 +lon_0=7.43958333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs +type=crs'
);
register(proj4);




// Initialise GeoGirafe themes, il will read the themes.json we created before
ThemesManager.getInstance();

// Define the three minimal webcomponents needed to show the map
customElements.define('girafe-map', MapComponent);
customElements.define('girafe-basemap', BasemapComponent);
customElements.define('girafe-button', ButtonComponent);
customElements.define('girafe-search', SearchComponent);
customElements.define('girafe-theme-select', ThemeComponent);
customElements.define('girafe-query-builder', QueryBuilderComponent);
customElements.define('girafe-globe-select', GlobeComponent);
customElements.define('girafe-tree-view', TreeViewComponent);
customElements.define('girafe-tree-view-group', TreeViewGroupComponent);
customElements.define('girafe-tree-view-item', TreeViewItemComponent);

