/**
 * Created : vincent
 * Date : 2019-07-10  16:57
 * Email : wangxiao@wafersystems.com
 */

export const deptTree = [{
  id: 1,
  parentId: 0,
  children: [
    {
      id: 3,
      parentId: 1,
      children: [
        {
          id: 4,
          parentId: 3,
          children: [
            {
              id: 5,
              parentId: 4,
              children: [],
              name: '院校农信',
            },
            {
              id: 6,
              parentId: 4,
              children: [],
              name: '院校农信123',
            },
          ],
          name: '高新农信',
        },
        {
          id: 14,
          parentId: 3,
          children: [
            {
              id: 15,
              parentId: 14,
              children: [],
              name: '院校农信B',
            },
            {
              id: 16,
              parentId: 14,
              children: [],
              name: '院校农信A',
            },
          ],
          name: '高新农信C',
        },
      ],
      name: '潍坊农信',
    },
  ],
  name: '山东农信',
}];

const tmp = []

for (let i = 0; i < 9; i++) {
  tmp.push({
    userId: 1,
    id: i,
    name: 'admin',
    password: '$2a$10$QOfWxxFyAMmEEmnuw9UI/..1s4B4eF/u9PzE2ZaGO.ij9YfmcUy.u',
    salt: null,
    wxOpenid: 'o_0FT0uyg_H1vVy2H0JpSwlVGhWQ',
    qqOpenid: null,
    createTime: '2018-04-20 07:15:18',
    updateTime: '2019-03-12 16:04:42',
    jobs: 'a@a.com',
    delFlag: '0',
    lockFlag: '0',
    rank: '17034642888',
    avatar: 'lengleng-0d2a7b025da14d8d93f595b3fa082d82.jpg',
    workNumberNumber: 1,
    tenantId: 1,
    fun: '真理部',
    roleList: [
      {
        roleId: 1,
        roleName: '管理员',
        roleCode: 'ROLE_ADMIN',
        roleDesc: '管理员',
        dsType: 2,
        dsScope: '2',
        createTime: '2017-10-29 15:45:51',
        updateTime: '2018-12-26 14:09:11',
        delFlag: '0',
      },
    ],
  },)
}

export const userList = {
  records: tmp,
  total: 11,
  size: 10,
  current: 1,
  searchCount: true,
  pages: 1,
};

export const us = {
  "records": [{
    "adAccount": "cam_gan",
    "accountName": "3160",
    "chsName": "甘露",
    "engName": "Cam",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "副总裁助理（高级主任）",
    "orgName": "市场"
  }, {
    "adAccount": "yuki_kong",
    "accountName": "1104",
    "chsName": "江雪琦",
    "engName": "Xueqi",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "无限极全球行政总裁助理（高级主任）",
    "orgName": "无限极全球"
  }, {
    "adAccount": "genies_ou",
    "accountName": "1250",
    "chsName": "欧婕寰",
    "engName": "Genies",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "副总裁助理（高级主任）",
    "orgName": "产品供应"
  }, {
    "adAccount": "qiong_zeng",
    "accountName": "5085",
    "chsName": "曾琼",
    "engName": "Judy",
    "gradeName": "主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "高级副总裁助理（主任）",
    "orgName": "无限极全球"
  }, {
    "adAccount": "XiaoQing.Dong",
    "accountName": "5807",
    "chsName": "董晓青",
    "engName": "Carol",
    "gradeName": "副主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "行政支持副主任",
    "orgName": "广州无限极广场"
  }, {
    "adAccount": "amy_liu",
    "accountName": "5601",
    "chsName": "刘淡真",
    "engName": "Amy",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "项目支持高级主任",
    "orgName": "快消品售后服务"
  }, {
    "adAccount": "huiyi_liu",
    "accountName": "5710",
    "chsName": "刘慧仪",
    "engName": "Chris",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "高级副总裁助理（高级主任）",
    "orgName": "区域管理及外事"
  }, {
    "adAccount": "Yoyo.Zhang",
    "accountName": "5855",
    "chsName": "张碧怡",
    "engName": "Yoyo",
    "gradeName": "高级主任",
    "gradeType": "主任级",
    "positionType": 0,
    "positionName": "副总裁助理（高级主任）",
    "orgName": "行政支援"
  }, {
    "adAccount": "Vanessa.Siu",
    "accountName": "0008495",
    "chsName": "蕭子君",
    "engName": "Vanessa",
    "gradeName": "主任",
    "gradeType": "",
    "positionType": 0,
    "positionName": "总裁助理",
    "orgName": "爽乐行政总裁办公室"
  }], "total": 15, "size": 9, "current": 1, "searchCount": true, "pages": 2
}
