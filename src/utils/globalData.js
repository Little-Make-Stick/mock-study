import { getLocal } from '@/utils/local'
const PROJECTS = [
    {
        code: 'project01',
        title: '珠峰一号水库大坝',
    },
    {
        code: 'project02',
        title: '珠峰二号水库大坝',
    },
    {
        code: 'project03',
        title: '珠峰三号水库大坝',
    },
    {
        code: 'project04',
        title: '塔里木一号水库大坝',
    },
];

const MONITOR_PROJECTS = [
    {
        label: '顺河向位移监测',
        index: 'along-river-displacement',
    },
    {
        label: '横河向位移监测',
        index: 'transverse-displacement',
    },
    {
        label: '垂直位移监测',
        index: 'vertical-displacement',
    },
    {
        label: '渗压监测',
        index: 'seepage-pressure',
    },
    {
        label: '渗流量监测',
        index: 'seepage-flow',
    },
    {
        label: '环境量监测',
        index: '/alarm-setting/environmental',
    },
];

const BAIDU_MAP_AK = "IfkNE0XDdoaTwdGGkOWrALDkFZOTI9b8";
const UPLOAD_BASE_URL = 'http://113.98.62.87:18080';

const LOGIN_URL = '/login';
// 上传
const UPLOAD_HEADER = {
    token: getLocal('token')
};

const CHART_COLORS = ['#ABC9FF', '#FF8B8B', '#B4FF9F', '#F9FFA4', '#FFD59E', '#E2DCC8', '#14C38E'];
const UPLOAD_FILE_URL = UPLOAD_BASE_URL + '/project/document/add';
const UPLOAD_IMAGE_URL = UPLOAD_BASE_URL + '/project/picture/add';
const UPLOAD_FILE_LIST_URL = '/project/document/query';
const UPLOAD_IMAGE_LIST_URL = '/project/picture/query';
const DELETE_UPLOAD_FILE_URL = '/project/document/remove';
const DELETE_UPLOAD_IMAGE_URL = '/project/picture/remove';
// 项目管理
const PROJECTS_LIST_URL = '/project/query/list';
const PAGER_PROJECTS_LIST_URL = '/project/query/page';
const QUERY_PROJECTS_LIST_URL = '/project/query/wherelist';
const ADD_PROJECT_URL = '/project/add';
const EDIT_PROJECT_URL = '/project/update';
const DEL_PROJECT_URL = '/project/delete';
// 国标服务器管理
const GB_SERVERS_LIST_URL = '/gbmonitor/gbserver/query/list';
const PAGER_GB_SERVERS_LIST_URL = '/gbmonitor/gbserver/query/page';
const QUERY_GB_SERVERS_LIST_URL = '/gbmonitor/gbserver/query/wherelist';
const ADD_GB_SERVER_URL = '/gbmonitor/gbserver/add';
const EDIT_GB_SERVER_URL = '/gbmonitor/gbserver/update';
const DEL_GB_SERVER_URL = '/gbmonitor/gbserver/delete';
// 国标设备管理
const GB_EQUIPMENTS_LIST_URL = '/gbmonitor/gbdevice/query/list';
const PAGER_GB_EQUIPMENTS_LIST_URL = '/gbmonitor/gbdevice/query/page';
const QUERY_GB_EQUIPMENTS_LIST_URL = '/gbmonitor/gbdevice/query/wherelist';
const ADD_GB_EQUIPMENT_URL = '/gbmonitor/gbdevice/add';
const EDIT_GB_EQUIPMENT_URL = '/gbmonitor/gbdevice/update';
const DEL_GB_EQUIPMENT_URL = '/gbmonitor/gbdevice/delete';
// 国标通道管理
const GB_CHANNELS_LIST_URL = '/gbmonitor/gbchannel/query/list';
const PAGER_GB_CHANNELS_LIST_URL = '/gbmonitor/gbchannel/query/page';
const QUERY_GB_CHANNELS_LIST_URL = '/gbmonitor/gbchannel/query/wherelist';
const ADD_GB_CHANNEL_URL = '/gbmonitor/gbchannel/add';
const EDIT_GB_CHANNEL_URL = '/gbmonitor/gbchannel/update';
const DEL_GB_CHANNEL_URL = '/gbmonitor/gbchannel/delete';
// 直播地址
const SURVEILLANCE_URL = '/play/getUrl';
// 项目监测项类别列表
const PROJECT_MONITOR_CATE_LIST = '/cate/query/cateAndSiteAndSensor';
// 项目监测项管理
const PROJECT_MONITORS_LIST_URL = '/project/monitoring/query';
const QUERY_PROJECT_MONITOR_URL = '/project/monitoring/wherelist';
const PAGER_PROJECT_MONITORS_LIST_URL = '';
const ADD_PROJECT_MONITOR_URL = '/project/monitoring/add';
const EDIT_PROJECT_MONITOR_URL = '/project/monitoring/update';
const DEL_PROJECT_MONITOR_URL = '/project/monitoring/remove';
// 传感器管理
const SENSORS_LIST_URL = '/device/query/list';
const PAGER_SENSORS_LIST_URL = '/device/query/page';
const QUERY_SENSORS_LIST_URL = '/device/query/wherelist';
const ADD_SENSOR_URL = '/device/add';
const EDIT_SENSOR_URL = '/device/update';
const DEL_SENSOR_URL = '/device/delete';
const SENSOR_PARAMS_LIST_URL = '/device/query/deviceType'
const SENSOR_TYPES_LIST_URL = '/device/query/all/types'
const SENSOR_CATES_LIST_URL = '/cate/query/sensor/list'
// 项目传感器管理
const PROJECT_SENSORS_LIST_URL = '/project/monitoring/sensor/query';
const PAGER_PROJECT_SENSORS_LIST_URL = '/project/monitoring/sensor/query/page';
const ADD_PROJECT_SENSOR_URL = '/project/monitoring/sensor/add';
const EDIT_PROJECT_SENSOR_URL = '/project/monitoring/sensor/update';
const DEL_PROJECT_SENSOR_URL = '/project/monitoring/sensor/remove';
// 监测点实时数据
const PROJECT_SENSOR_REAL_TIME_DATA = '/project/collect/data/query';
// 监测点历史数据
const PROJECT_SENSOR_HISTORY_DATA = '/project/hist/collect/data/query';
// 监测项所有测点数据
const PROJECT_REAL_TIME_DATA = '/project/realtime/detaildata/query';
// 工程首页数据
const PROJECT_HOME_DATA = '/project/home/info';
// 用户管理
const USERS_LIST_URL = '/user/query/list';
const QUERY_USERS_LIST_URL = '/user/query/wherelist';
const PAGER_USERS_LIST_URL = '/user/query/page';
const ADD_USER_URL = '/user/add';
const EDIT_USER_URL = '/user/update';
const EDIT_USER_PASSWORD_URL = '/user/change/password';
const DEL_USER_URL = '/user/delete';
// 项目用户管理
const PROJECT_USERS_LIST_URL = '/project/user/query';
const PAGER_PROJECT_USERS_LIST_URL = '/project/user/query/page';
const ADD_PROJECT_USER_URL = '/project/user/add';
const EDIT_PROJECT_USER_URL = '';
const DEL_PROJECT_USER_URL = '/project/user/remove';
// 权限管理
const AUTHS_LIST_URL = '/permision/query';
// 项目权限组管理
const PROJECT_ROLES_LIST_URL = '/role/query/list';
const PAGER_PROJECT_ROLES_LIST_URL = '/role/query/page';
const QUERY_PROJECTS_ROLE_URL = '/role/query/wherelist';
const QUERY_PROJECT_ROLE_AUTHS_URL = '/role/query/permission';
const ADD_PROJECT_ROLE_URL = '/role/add';
const EDIT_PROJECT_ROLE_NAME_URL = '/role/update';
const EDIT_PROJECT_ROLE_AUTHS_URL = '/role/add/permission';
const DEL_PROJECT_ROLE_URL = '/role/delete';
// 项目用户-权限组
const QUERY_PROJECTS_USER_ROLE_URL = '/user/query/role';
const SET_PROJECTS_USER_ROLE_URL = '/user/add/role';
// 阈值管理
const THRESHOLD_GROUP_LIST = '/warning/switch/query';
const THRESHOLD_DETAIL_LIST = '/warning/switch/detail/query';
const THRESHOLD_PARAMS_LIST = '/warning/switch/field/query';
const ADD_THRESHOLD_GROUP = '/warning/switch/update';
const UPDATE_THRESHOLD_GROUP = '/warning/switch/update';
const DELETE_THRESHOLD_GROUP = '/warning/switch/delete';

export default { 
    PROJECTS, 
    MONITOR_PROJECTS, 
    BAIDU_MAP_AK,                          // 百度地图 KEY
    UPLOAD_BASE_URL,                       // 上传的基础路径
    LOGIN_URL,                             // 登录 API
    CHART_COLORS,                          // 图表配色

    UPLOAD_FILE_URL,                       // 上传文件 API
    UPLOAD_IMAGE_URL,                      // 上传图片 API
    UPLOAD_HEADER,                         // 上传文件请求头
    UPLOAD_FILE_LIST_URL,                  // 查询所有上传的文件
    UPLOAD_IMAGE_LIST_URL,                 // 查询所有上传的图片
    DELETE_UPLOAD_FILE_URL,                // 删除上传的项目文件
    DELETE_UPLOAD_IMAGE_URL,               // 删除上传的项目图片

    PROJECTS_LIST_URL,                     // 查询所有项目
    PAGER_PROJECTS_LIST_URL,               // 分页查询所有项目
    QUERY_PROJECTS_LIST_URL,               // 按条件查询所有项目
    ADD_PROJECT_URL,                       // 新增项目
    EDIT_PROJECT_URL,                      // 编辑项目
    DEL_PROJECT_URL,                       // 删除项目

    GB_SERVERS_LIST_URL,                   // 查询所有国标服务器
    PAGER_GB_SERVERS_LIST_URL,             // 分页查询所有国标服务器
    QUERY_GB_SERVERS_LIST_URL,             // 按条件查询所有国标服务器
    ADD_GB_SERVER_URL,                     // 新增国标服务器
    EDIT_GB_SERVER_URL,                    // 编辑国标服务器
    DEL_GB_SERVER_URL,                     // 删除国标服务器

    GB_EQUIPMENTS_LIST_URL,                // 查询所有国标设备
    PAGER_GB_EQUIPMENTS_LIST_URL,          // 分页查询所有国标设备
    QUERY_GB_EQUIPMENTS_LIST_URL,          // 按条件查询所有国标设备
    ADD_GB_EQUIPMENT_URL,                  // 新增国标设备
    EDIT_GB_EQUIPMENT_URL,                 // 编辑国标设备
    DEL_GB_EQUIPMENT_URL,                  // 删除国标设备

    GB_CHANNELS_LIST_URL,                  // 查询所有国标通道
    PAGER_GB_CHANNELS_LIST_URL,            // 分页查询所有国标通道
    QUERY_GB_CHANNELS_LIST_URL,            // 按条件查询所有国标通道
    ADD_GB_CHANNEL_URL,                    // 新增国标通道
    EDIT_GB_CHANNEL_URL,                   // 编辑国标通道
    DEL_GB_CHANNEL_URL,                    // 删除国标通道

    SURVEILLANCE_URL,                      // 获取直播地址

    PROJECT_MONITOR_CATE_LIST,             // 查询所有项目监测项类别

    PROJECT_MONITORS_LIST_URL,             // 查询所有项目监测项
    QUERY_PROJECT_MONITOR_URL,             // 条件查询项目监测项
    PAGER_PROJECT_MONITORS_LIST_URL,       // 分页查询项目监测项
    ADD_PROJECT_MONITOR_URL,               // 新增项目监测项
    EDIT_PROJECT_MONITOR_URL,              // 编辑项目监测项
    DEL_PROJECT_MONITOR_URL,               // 删除项目监测项

    SENSORS_LIST_URL,                      // 查询所有传感器
    PAGER_SENSORS_LIST_URL,                // 分页查询传感器
    QUERY_SENSORS_LIST_URL,                // 条件查询传感器
    ADD_SENSOR_URL,                        // 新增传感器
    EDIT_SENSOR_URL,                       // 编辑传感器
    DEL_SENSOR_URL,                        // 删除传感器
    SENSOR_PARAMS_LIST_URL,                // 查询传感器参数及描述
    SENSOR_TYPES_LIST_URL,                 // 查询传感器类型列表
    SENSOR_CATES_LIST_URL,                 // 查询设备类别列表

    PROJECT_SENSORS_LIST_URL,              // 查询所有项目传感器
    PAGER_PROJECT_SENSORS_LIST_URL,        // 分页查询项目传感器
    ADD_PROJECT_SENSOR_URL,                // 新增项目传感器
    EDIT_PROJECT_SENSOR_URL,               // 编辑项目传感器
    DEL_PROJECT_SENSOR_URL,                // 删除项目传感器

    PROJECT_SENSOR_REAL_TIME_DATA,         // 监测点实时数据
    PROJECT_SENSOR_HISTORY_DATA,           // 监测点历史数据
    PROJECT_REAL_TIME_DATA,                // 监测项所有测点数据
    PROJECT_HOME_DATA,                     // 工程首页数据

    USERS_LIST_URL,                        // 查询所有用户
    QUERY_USERS_LIST_URL,                  // 按条件查询所有用户
    PAGER_USERS_LIST_URL,                  // 分页查询用户
    ADD_USER_URL,                          // 新增用户
    EDIT_USER_URL,                         // 编辑用户
    EDIT_USER_PASSWORD_URL,                // 编辑用户密码
    DEL_USER_URL,                          // 删除用户

    PROJECT_USERS_LIST_URL,                // 查询所有项目用户
    PAGER_PROJECT_USERS_LIST_URL,          // 分页查询项目用户
    ADD_PROJECT_USER_URL,                  // 新增项目用户
    EDIT_PROJECT_USER_URL,                 // 编辑项目用户
    DEL_PROJECT_USER_URL,                  // 删除项目用户

    AUTHS_LIST_URL,                        // 查询所有权限

    PROJECT_ROLES_LIST_URL,                // 查询所有角色
    PAGER_PROJECT_ROLES_LIST_URL,          // 分页查询角色
    QUERY_PROJECTS_ROLE_URL,               // 按条件查询所有角色
    QUERY_PROJECT_ROLE_AUTHS_URL,          // 获取角色权限
    ADD_PROJECT_ROLE_URL,                  // 新增项目角色
    EDIT_PROJECT_ROLE_NAME_URL,            // 编辑项目角色名称
    EDIT_PROJECT_ROLE_AUTHS_URL,           // 编辑项目角色权限
    DEL_PROJECT_ROLE_URL,                  // 删除项目角色

    QUERY_PROJECTS_USER_ROLE_URL,          // 查询用户角色
    SET_PROJECTS_USER_ROLE_URL,            // 设置用户角色

    THRESHOLD_GROUP_LIST,                  // 获取阈值组列表
    THRESHOLD_DETAIL_LIST,                 // 获取阈值组的阈值明细
    THRESHOLD_PARAMS_LIST,                 // 获取阈值组的参数组
    ADD_THRESHOLD_GROUP,                   // 新增阈值组
    UPDATE_THRESHOLD_GROUP,                // 编辑阈值组
    DELETE_THRESHOLD_GROUP,                // 删除阈值组
}

 