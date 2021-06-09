/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import _keyBy from 'lodash/keyBy'
import _values from 'lodash/values'

export const PAGINATION = {
  pageNo: 1,
  pageSize: 20,
}

export const PAGINATION_OPTIONS = {
  showQuickJumper: false,
  defaultCurrent: PAGINATION.pageNo,
  defaultPageSize: PAGINATION.pageSize,
}

export const DEVICE_TYPE = {
  pc: 'PC',
}

// 购物车类型
export const CART_TYPE = {
  online: 'cart_normal',
}

// 购物车分组类型
export const CART_GROUP_TYPE = {
  valid: 'VALID',
  invalid: 'INVALID',
  shop: 'SHOP',
  activity: 'CAMPAIGN',
  line: 'LINE',
}

// 购物车活动级别
export const CART_PROMOTION_LEVEL = {
  shop: 'SHOP', // 店铺活动
  platform: 'PLATFORM', // 平台活动
}

// 促销活动类型
export const CAMPAIGN_SUB_TYPE = {
  presale: 'PRESELL', // 预售
  seckill: 'SECKILL', // 秒杀
  groupPurchasing: 'GROUP_PURCHASING', // 拼团
  straightDown: 'STRAIGHT_DOWN', // 直降
  freeGift: 'PROMOTION_GIFT', // 满赠
  exchange: 'PROMOTION_EXCHANGE', // 换购
}

// 购物车行商品类型标
export const CART_LINE_TAG = {
  gift: 'PREFERENTIAL_GIFT', // 赠品
  exchange: 'PREFERENTIAL_EXCHANGE', // 换购
  normal: 'DEFAULT', // 普通商品
}

export const CART_PRODUCT_PROMO_TAG = {
  gift: 'emitFreeGift',
  exchange: 'exchangeSku',
}

// 购物车商品行促销标-给后端参数用
export const CART_PRODUCT_PROMO_TAG_MAP = {
  [CAMPAIGN_SUB_TYPE.freeGift]: CART_PRODUCT_PROMO_TAG.gift, // 满赠
  [CAMPAIGN_SUB_TYPE.exchange]: CART_PRODUCT_PROMO_TAG.exchange, // 换购
}

// 下单页来源
export const ORDER_SOURCE = {
  cart: 'cart_normal', // 购物车
  pdp: 'product.detail.page', // 商详
  order: 'order', // 订单
}

export const FORMAT = {
  sDateMD: 'MM/dd',
  sDate: 'yyyy/MM/dd', // Separate by slash
  dDate: 'yyyy-MM-dd', // Separate by dash
  tDate: 'yyyy.MM.dd', // Separate by dot
  hDate: 'yyyy-MM-dd HH',
  cnDate: 'yyyy年MM月dd日',
  cnTime: 'yyyy年MM月dd日 HH:mm:ss',
  timezone: 'Asia/Shanghai',
  time: 'yyyy/MM/dd HH:mm:ss',
  dTime: 'yyyy-MM-dd HH:mm:ss',
  dMinute: 'yyyy-MM-dd HH:mm',
}

// 促销活动优惠类型
export const ACTIVITY_KEY_TYPE = {
  deduction: 'deduction', // 满减
  discount: 'percent.discount', // 折扣
  perDeduction: 'per.deduction', // 每满减
  stepDeduction: 'step.deduction', // 阶梯满减
  emitCoupon: 'emit.coupon', // 满赠-赠送优惠券
  freeGift: 'emit.free.gift', // 满赠商品
}
// 促销活动类型
export const ACTIVITY_CODE = {
  freeGift: 'emitFreeGift', // 满赠商品
}
// 商品促销标
export const PRODUCT_ACTIVITY_TAG = {
  freeGift: 'emitFreeGift', // 赠品
}

// 获取所有省份的parentId
export const ADDRESS_PROVINCE_PARENT_ID = 1
// 默认地址
export const DEFAULT_ADDRESS = {
  provinceId: 110000,
  cityId: 110100,
  regionId: 110101,
  streetId: 11010100100,
  provinceCode: 'CODE110000',
  cityCode: 'CODE110100',
  regionCode: 'CODE110105',
  streetCode: 'CODE11010500100',
  province: '北京',
  city: '北京市',
  region: '朝阳区',
  street: '建外街道',
}
// 地址层级，从大范围到小范围
export const ADDRESS_LEVEL = ['province', 'city', 'region', 'street']
// 地址cookie有效期
export const ADDRESS_COOKIE_EXPIRY_DAY = 7
// 地址cookie key
export const ADDRESS_COOKIE_KEY = 'addressObj'
// 发票种类
export const INVOICE_KIND = {
  normal: 1,
  electric: 'GENERAL', // 电子发票
  vat: 'PROFESSION', // 增值税发票
  noInvoice: 'nofp',
}
// 不开发票选项
export const NO_INVOICE_ITEM = {
  id: 'nofp',
  invoiceKind: INVOICE_KIND.noInvoice,
}
// 发票类型
export const INVOICE_TYPE = {
  personal: 'PERSONAL',
  company: 'COMPANY',
}

// 发票抬头类型
export const INVOICE_TITLE_TYPE = {
  [INVOICE_TYPE.personal]: '个人/非企业单位',
  [INVOICE_TYPE.company]: '公司',
}

// 发票类型
export const INVOICE_TITLE_KIND = {
  [INVOICE_KIND.electric]: '增值税电子普通发票',
}

// 加载中延迟时间
export const LOADING_DELAY_TIME = 200

// 满星数
export const TOTAL_STAR_NUM = 5

// 手机号正则
export const MOBILE_REGEX = /^1[3|4|5|6|7|8|9][0-9]{9}$/
// 可能脱敏手机号正则
export const MOBILE_SENSITIVE_REGEX =
  /^1[3|4|5|6|7|8|9][0-9]{1}[*|0-9]{4}[0-9]{4}$/
// 密码格式校验
// eslint-disable-next-line
export const PASSWORD_REG =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`·！……（）——+《》？“：「」】【、￥!,@#$%^&*?_\\>\\<\~\;\:\=\[\]\{\}\(\)\+\\\/\?\.\|\-])[A-Za-z\d`·！……（）——+《》？“：「」】【、￥!,@#$%^&*?_\\>\\<\~\;\:\=\[\]\{\}\(\)\+\\\/\?\.\|\-]{6,16}$/

// Channel枚举应与 后端接口payChannels字段对应
// 收银台、支付结果页使用
export const PAY_CHANNEL_ENUM = {
  MOCKPAY: 'MOCKPAY',
  ALIPAY_PC: 'ALIPAY_PC',
  WECHATPAY_QR: 'WECHATPAY_QR',
  UNIONPAY_PC: 'UNIONPAY_PC', // 企业网银支付
}

// 不使用优惠时的activityId
export const CANCEL_PLATFORM_ACTIVITY_ID = -1

/**
 * 默认图片
 */
export const EMPTY_IMAGE =
  '//parana.oss-cn-hangzhou.aliyuncs.com/item_not_found.png'

export const COMMENT_OPERATOR_USER_TYPE = 0 // admin用户类型
export const COMMENT_SELLER_USER_TYPE = 1 // 商家用户类型
export const COMMENT_STORE_STAFF_USER_TYPE = 2 // 门店用户类型
export const COMMENT_PRESSER_USER_TYPE = 3
export const COMMENT_BUYER_USER_TYPE = 4 // 买家用户类型

// 顶层评价parentId
export const COMMENT_ROOT_PARENT_ID = -1

// 逗号分隔数字正则
export const ID_LIST_REGEX = /^(\d+[,])*(\d+)$/

// 用户注册协议和隐私政策文章ID
export const REGISTRATION_ID = process.env.REGISTRATION_ID
// 用户注销协议
export const DESTROY_ACCOUNT_ID = process.env.DESTROY_ACCOUNT_ID

// 收藏类型
export const FAVORITE_TARGET_TYPE = {
  product: 1, // 商品收藏
}

// 下单页权益类型
export const BENEFIT_TYPE = {
  card: 'SHOPPING_CARD', // 购物卡
  point: 'MEMBER_POINTS', // 积分
}

// 下单页操作的优惠类型
export const OPERATION_PROMOTION_TYPE = {
  coupon: 'coupon', // 优惠券
  card: 'card', // 购物卡
  point: 'point', // 积分
}

// 优惠券级别店铺/平台
export const COUPONN_BENEFIT_GROUP = {
  shop: 'SHOP',
  platform: 'PLATFORM',
}
// 下单交易类型
export const TRADE_TYPE = {
  b2c: 'NORMAL_SALE_B2C',
  b2b: 'NORMAL_SALE_B2B',
  purchase: 'NORMAL_PURCHASE', // 采购
}

// b2c下单渠道
export const ORDER_CHANNEL_B2C = 'B2C'

// 入驻状态
export const MERCHANT_SETTLE_STATUS = {
  WAITING: 'audit',
  AUDIT_PASS: 'pass',
  AUDIT_FAILED: 'audit',
  DRAFT: 'audit',
  WAITING_PAY: 'seller',
  NORMAL: 'seller',
  WAITING_UPDATE: 'seller',
  STOP_OPERATE: 'seller',
  FROZEN: 'frozen',
  CLEAR: 'clear',
}

// 商家入驻申请状态
export const SETTLE_APPLY_STATUS = {
  audit: 'WAITING', // 审核中
  auditFail: 'AUDIT_FAILED', // 审核失败
  hasAudited: 'AUDIT_PASS', // 审核通过
}
export const APPLY_STATUS = {
  WAITING: 0, // 审核中
  AUDIT_FAILED: 1, // 审核失败
  AUDIT_PASS: 2, // 审核通过
}
// 组织机构类型
export const ORGANIZATION_TYPE = [
  { value: 'ENTERPRISE', label: '企业' },
  { value: 'PERSONAL', label: '个体工商户' },
  { value: 'INSTITUTION', label: '事业单位' },
  { value: 'ORGAN', label: '机关' },
  { value: 'OTHER', label: '其他' },
]
export const ORGANIZATION_TYPE_MAP = _keyBy(_values(ORGANIZATION_TYPE), 'value')

// 纳税人类别
export const TAXPAYER_TYPE = [
  { value: 'GENERAL_TAXPAYER', label: '一般纳税人' },
  { value: 'SMALL_TAXPAYER', label: '小规模纳税人' },
]
export const TAXPAYER_TYPE_MAP = _keyBy(_values(TAXPAYER_TYPE), 'value')

// 商家入驻条件类型
export const MERCHANT_APPLY_CONDITION_NAME = {
  agreement: 'AGREE_AGREEMENT', // 协议
  formField: 'FILL_IN_INFORMATION', // 表单字段
}
// 商家入驻条件值类型
export const MERCHANT_APPLY_CONDITION_VALUE = {
  equal: 'EQUAL', // 等于
  required: 'REQUIRED', // 必填
  optional: 'OPTIONAL', // 选填
}
// 商家入驻表单字段枚举 key是后端字段 value是前端使用的表单字段
export const MERCHANT_APPLY_CONDITION_FIELD = {
  district: 'district', // 企业所在地区
  companyAddress: 'companyAddress', // 企业地址
  companyFunding: 'companyFunding', // 注册资本
  foundDate: 'foundDate', // 成立日期
  openDate: 'openDate', // 营业期限开始时间
  closeDate: 'closeDate', // 营业期限结束时间

  taxpayersType: 'taxpayersType', // 纳税人类型
  taxpayersNum: 'taxpayersNum', // 纳税人识别号
  branchBankName: 'branchBankName', // 开户银行名称
  accountName: 'accountName', // 开户名称
  bankAccount: 'bankAccount', // 银行账号

  companyWebsite: 'companyWebsite', // 官网
  companyPhone: 'companyPhone', // 电话
  bizScope: 'bizScope', // 经营范围
  companyDscp: 'companyDscp', // 公司介绍
}

// 是否开启同城运营
export const ENABLE_MULTIPLE_DESIGN_SITE =
  process.env.ENABLE_MULTIPLE_DESIGN_SITE === 'true'
