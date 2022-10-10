import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import bmView from 'vue-baidu-map/components/map/MapView.vue'
/**
 * ****************************************
 *             overlays(覆盖物)
 * *****************************************
 **/ 
import bmMarker from 'vue-baidu-map/components/overlays/Marker.vue'
import bmLabel from 'vue-baidu-map/components/overlays/Label.vue'
import bmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow.vue'
import bmOverlay from 'vue-baidu-map/components/overlays/Overlay.vue'
import bmCircle from 'vue-baidu-map/components/overlays/Circle.vue'
import bmPolygon from 'vue-baidu-map/components/overlays/Polygon.vue'
import bmPolyline from 'vue-baidu-map/components/overlays/Polyline.vue'
import bmPointCollection from 'vue-baidu-map/components/overlays/PointCollection.vue'
import bmGround from 'vue-baidu-map/components/overlays/Ground.vue'

import bmIcon from 'vue-baidu-map/components/overlays/Icon.vue'
import bmSymblo from 'vue-baidu-map/components/overlays/Symblo.vue'
/**
 * ****************************************
 *             controls(控件)
 * *****************************************
 **/ 
import bmScale from 'vue-baidu-map/components/controls/Scale.vue'
import bmNavigation from 'vue-baidu-map/components/controls/Navigation.vue'
import bmMapType from 'vue-baidu-map/components/controls/MapType.vue'
import bmOverviewMap from 'vue-baidu-map/components/controls/OverviewMap.vue'
import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
import bmCopyright from 'vue-baidu-map/components/controls/Copyright.vue'
import bmCityList from 'vue-baidu-map/components/controls/CityList.vue'
import bmPanorama from 'vue-baidu-map/components/controls/Panorama.vue'
import bmControl from 'vue-baidu-map/components/controls/Control.vue'
/**
 * ****************************************
 *             layers(图层)
 * *****************************************
 **/ 
import bmTile from 'vue-baidu-map/components/layers/Tile.vue'
import bmTraffic from 'vue-baidu-map/components/layers/Traffic.vue'
/**
 * ****************************************
 *             search(检索)
 * *****************************************
 **/
import bmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'
import bmTransit from 'vue-baidu-map/components/search/Transit.vue'
import bmWalking from 'vue-baidu-map/components/search/Walking.vue'
import bmDriving from 'vue-baidu-map/components/search/Driving.vue'
import bmBus from 'vue-baidu-map/components/search/Bus.vue'
/**
 * ****************************************
 *             context-menu(上下文菜单)
 * *****************************************
 **/
import bmContextMenu from 'vue-baidu-map/components/context-menu/Menu.vue'
import bmContextMenuItem from 'vue-baidu-map/components/context-menu/Item.vue'
/**
 * ****************************************
 *             others(其他)
 * *****************************************
 **/
import bmBoundary from 'vue-baidu-map/components/others/Boundary.vue'
import bmAutoComplete from 'vue-baidu-map/components/others/AutoComplete.vue'
/**
 * ****************************************
 *             extra(其他)
 * *****************************************
 **/
import bmlMarkerClusterer from 'vue-baidu-map/components/extra/MarkerClusterer.vue'
import bmlLushu from 'vue-baidu-map/components/extra/Lushu.vue'
import bmlHeatmap from 'vue-baidu-map/components/extra/Heatmap.vue'
import bmlCurveLine from 'vue-baidu-map/components/extra/CurveLine.vue'

export default {
    BaiduMap,               // 地图容器
    bmView,                 // 地图视图
    bmMarker,               // 点
    bmLabel,                // 标签
    bmInfoWindow,           // 信息窗体
    bmOverlay,              // 自定义覆盖物
    bmCircle,               // 圆形
    bmPolygon,              // 多边形
    bmPolyline,             // 折线
    bmPointCollection,      // 海量点
    bmGround,               // 地面
    bmScale,                // 比例尺
    bmNavigation,           // 缩放
    bmMapType,              // 地图类型
    bmOverviewMap,          // 缩略图
    bmGeolocation,          // 定位
    bmCopyright,            // 版权
    bmCityList,             // 城市列表
    bmPanorama,             // 全景
    bmControl,              // 自定义控件
    bmTile,                 // 瓦片图层
    bmTraffic,              // 交通流量图层
    bmLocalSearch,          // 地区检索
    bmTransit,              // 公交路线规划
    bmWalking,              // 步行路线规划
    bmDriving,              // 驾车路线规划
    bmBus,                  // 公交路线检索
    bmContextMenu,          // 菜单
    bmContextMenuItem,      // 菜单项
    bmBoundary,             // 行政区划
    bmAutoComplete,         // 自动填充
    bmlMarkerClusterer,     // 点聚合
    bmlLushu,               // 路书
    bmlHeatmap,             // 热力图
    bmlCurveLine,           // 弧线
}