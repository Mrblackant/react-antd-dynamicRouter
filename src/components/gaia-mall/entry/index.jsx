import { useEffect, useState, useRef, forwardRef } from 'react'
import moment from 'moment'
import AddressCascader from './children/AddressCascader'
import { getReceiveAddress } from './common/helper'
import {
  MERCHANT_APPLY_CONDITION_NAME,
  DEFAULT_ADDRESS,
  TAXPAYER_TYPE,
  ORGANIZATION_TYPE,
  MERCHANT_APPLY_CONDITION_FIELD,
  MERCHANT_APPLY_CONDITION_VALUE,
} from './common/constants'

import {
  Spin,
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  DatePicker,
  message,
  Row,
  Col,
  Modal,
} from 'antd'
import { getApplyConfig, getCategoryList } from './mock'
import { Alert } from 'antd'
import '../index.scss'

const { Option } = Select
const MAX_IMAGES_NUM = 1

const renderTitle = () => (
  <Alert
    message="请详细填写相关信息，提交将在3-5个工作日内审核完成。感谢您的信任与支持！"
    type="warning"
    showIcon
  />
)
function EntryForm(props, ref) {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false) //loading
  const [getSome, setSome] = useState(false) //loading
  const [applyConfig, setApplyConfig] = useState({})
  const [agreementArticle, setAgreementArticle] = useState([])
  const [applyDetail, setApplyDetail] = useState({}) //form初始内容
  const [globalData, setGlobalData] = useState({
    attachment: [],
    specialCategory: [],
    initValue: {},
    initAddressInfo: {},
  })
  const [categoryData, setCategoryData] = useState([]) //经营类目初始数据
  const [scrollPage, setScrollPage] = useState(1) //经营类目翻页
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [visible, setVisible] = useState(false)

  const { attachment, specialCategory, initValue, initAddressInfo } = globalData //表单初始内容
  const { validateFields, setFieldsValue, getFieldValue } = form

  // 获取配置信息
  useEffect(() => {
    setLoading(true)
    Promise.all([
      getApplyConfig({}).then((resp) => {
        setApplyConfig(resp)
      }),
      getCategoryList().then((resp) => {
        setCategoryData(resp.data)
      }),
    ]).finally(() => {
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    setGlobalData(getFormInitData())
  }, [applyDetail])

  /*
   * 表单初始化信息
   */
  const getFormInitData = () => {
    const {
      merchantCode,
      companyName,
      organizationType,
      socialCreditCode,
      companyAttachment,
      companyCorporation,
      categoryList,
      specialCategoryAttachment,
      companyAddress,
      foundDate,
      openDate,
      companyFunding,
      taxpayersType,
      closeDate,
      taxpayersNum,
      companyDscp,
      bizScope,
      companyWebsite,
      companyBankAccount,
      companyPhone,
      id,
      address: companyAddressInfo,
    } = applyDetail || {}
    const isEdit = id != null

    const { files } = specialCategoryAttachment || {}
    const specialCategory = (files || []).map((item) => item.url)
    const { accountName, bankAccount, branchBankName } =
      companyBankAccount || {}
    const { files: file } = companyAttachment || {}
    const attachment = (file || []).map((item) => item.url)

    const { districtList } = companyAddressInfo || {}
    const initAddressInfo = districtList
      ? getReceiveAddress(districtList)
      : DEFAULT_ADDRESS
    const district = getCompanyDistrictId(initAddressInfo)

    const initValue = {
      companyName,
      organizationType,
      socialCreditCode,
      companyCorporation,
      companyAddress,
      companyFunding,
      companyAttachment: isEdit ? attachment : undefined,
      categoryList: isEdit
        ? (categoryList || []).map((it) => it.id)
        : undefined,
      specialCategoryAttachment: isEdit ? specialCategory : undefined,
      foundDate: foundDate != null ? moment(foundDate) : undefined,
      openDate: openDate != null ? moment(openDate) : undefined,
      closeDate: closeDate != null ? moment(closeDate) : undefined,
      taxpayersType,
      taxpayersNum,
      companyDscp,
      bizScope,
      companyWebsite,
      accountName,
      bankAccount,
      branchBankName,
      companyPhone,
      district,
    }

    return {
      attachment,
      specialCategory,
      initValue,
      initAddressInfo,
    }
  }

  // 同意协议
  function handleChange(articleId, e) {
    const { checked } = e.target
    setAgreementArticle((prev) =>
      checked ? [...prev, articleId] : prev.filter((item) => item !== articleId)
    )
  }
  // 点击协议名称，展示协议弹框
  function showModal(agreementTitle, agreementContent) {
    setTitle(agreementTitle)
    setContent(agreementContent)
    setVisible(true)
  }

  // 类目选择分页加载
  const categoryScroll = (e) => {
    e.persist()
    const { target } = e
    if (target.scrollTop + target.offsetHeight === target.scrollHeight) {
      const nextScrollPage = scrollPage + 1
      setScrollPage(nextScrollPage)
      getCategoryList({ size: 10, no: nextScrollPage }).then((resp) => {
        const { data } = resp
        setCategoryData((prev) => [...prev, ...data])
      })
    }
  }

  function getCompanyDistrictId(addressInfo) {
    const { provinceId, cityId, regionId, streetId } = addressInfo
    return [streetId, regionId, cityId, provinceId].find((it) => it != null)
  }

  function handleOpenDateChange() {
    //营业期限开始日期 change
    setTimeout(() => {
      validateFields(['closeDate'], { force: true })
    }, 0)
  }
  // 协议信息
  const { settledConditionBOList } = applyConfig || {}
  const agreementInfo = (settledConditionBOList || []).filter(
    (it) => it.name === MERCHANT_APPLY_CONDITION_NAME.agreement
  )

  // 表单必填与否配置
  const { settledConditionBOList: configDate } = applyConfig || {}
  const requiredFields = []
  const formFields = []
  if (configDate) {
    for (let i = 0; i < configDate.length; i++) {
      if (
        configDate[i] &&
        configDate[i].name === MERCHANT_APPLY_CONDITION_NAME.formField
      ) {
        const backendFieldName = configDate[i]?.settingContentBO?.nameField
        formFields.push(MERCHANT_APPLY_CONDITION_FIELD[backendFieldName])
        if (
          configDate[i].condition !== MERCHANT_APPLY_CONDITION_VALUE.optional
        ) {
          requiredFields.push(MERCHANT_APPLY_CONDITION_FIELD[backendFieldName])
        }
      }
    }
  }

  function handleRefuse() {
    setVisible(false)
    // history.push('/')
  }
  function handleAddressChange(addressInfo) {
    // 更新表单值
    setFieldsValue({ district: getCompanyDistrictId(addressInfo) })
  }
  // 表单提交，点击提交，弹框二次确认
  function handleSubmit(values) {
    if (agreementInfo && agreementInfo.length) {
      const article = agreementInfo.some((item) => {
        const { cmsMiscArticleBO } = item
        if (!agreementArticle.includes(cmsMiscArticleBO.id)) {
          message.info(`您尚未同意「${cmsMiscArticleBO.title}」`)
          return cmsMiscArticleBO.id
        }
        return null
      })
      if (!article) {
        submitProcess(values)
      }
    } else {
      submitProcess(values)
    }
  }
  function submitProcess(val) {}
  // 弹窗
  function handleOk() {
    setVisible(false)
  }

  /*
   *表单集合
   */
  const formContents = () => {
    // 基本信息
    const companyInfo = () => {
      return (
        <Row gutter={24} type="flex" justify="start" align="middle">
          <Col span={8}>
            <Form.Item
              label="企业名称"
              name="companyName"
              key="companyName"
              rules={[
                { max: 50, message: '企业名称最多不超过50字符' },
                { required: true, message: '请输入企业全称，需与营业执照一致' },
              ]}
            >
              <Input placeholder="请输入企业全称，需与营业执照一致" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="组织机构类型"
              name="organizationType"
              key="organizationType"
              rules={[{ required: true, message: '请选择组织机构类型' }]}
            >
              <Select placeholder="请选择组织机构类型">
                {ORGANIZATION_TYPE.map((value) => (
                  <Option key={value.value} value={value.value}>
                    {value.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="统一社会信用代码"
              name="socialCreditCode"
              key="socialCreditCode"
              rules={[
                { max: 18, message: '统一社会信用代码长度不超过18位' },
                { required: true, message: '请输入统一社会信用代码' },
              ]}
            >
              <Input placeholder=" 请输入统一社会信用代码，需与营业执照一致" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="法定代表人"
              key="companyCorporation"
              name="companyCorporation"
              rules={[
                { max: 50, message: '法定代表人长度不得超过50个字符' },
                { required: true, message: '请输入正确的法定代表人' },
              ]}
            >
              <Input placeholder="请输入法定代表人" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="经营类目"
              key="categoryList"
              name="categoryList"
              rules={[{ required: true, message: '请选择经营类目' }]}
            >
              <Select
                mode="multiple"
                placeholder="请选择经营类目"
                onPopupScroll={categoryScroll}
                notFoundContent={loading ? <Spin size="small" /> : null}
              >
                {categoryData &&
                  categoryData.map((value) => (
                    <Option key={value.id} value={value.id}>
                      {value.categoryName}
                    </Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Form.Item name="companyAttachment" key="companyAttachment">
              {/* <Form.Item
                label="营业执照"
                name="companyAttachment"
                rules={[{ required: true, message: '请上传营业执照' }]}
              >
                <ImagesUpload value={attachment} maxNum={1} />
              </Form.Item> */}
              <p className="img-text">请上传小于5MB的PNG或JPG的图片</p>
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              key="specialCategoryAttachment"
              name="specialCategoryAttachment"
            >
              {/* <Form.Item
                label="特殊类目经营资质"
                name="specialCategoryAttachment"
              >
                <ImagesUpload
                  value={specialCategory}
                  multiple
                  maxNum={MAX_IMAGES_NUM}
                  uploadRestrictions
                />
              </Form.Item> */}
              <p className="img-text">
                请上传小于2MB的PNG或JPG的图片，仅特殊类目需要上传，最多上传6张
              </p>
            </Form.Item>
          </Col>
        </Row>
      )
    }
    // 经营信息
    const businessInformationInfo = () => {
      return (
        <Row gutter={24} type="flex" justify="start" align="middle">
          {true ? (
            <Col span={8}>
              <Form.Item
                label="地区"
                name="district"
                key="district"
                rules={[
                  {
                    required: requiredFields.includes('district'),
                    message: '请选择企业所在地区',
                  },
                ]}
              >
                <AddressCascader
                  ref={ref}
                  changeCallback={handleAddressChange}
                  initAddress={initAddressInfo}
                  needDefaultValue
                  level={4}
                />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="地址"
                name="companyAddress"
                key="companyAddress"
                rules={[
                  {
                    required: requiredFields.includes('companyAddress'),
                    message: '请输入企业地址',
                  },
                  { max: 100, message: '企业地址不超过100字符' },
                ]}
              >
                <Input placeholder="请输入企业地址" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="注册资本"
                name="companyFunding"
                key="companyFunding"
                rules={[
                  {
                    required: requiredFields.includes('companyFunding'),
                    message: '请输入注册资本',
                  },
                  {
                    pattern: /^[0-9]{1}\d{0,9}(\.\d{1,4})?$/,
                    message: '注册资本不可超过99万亿，如不足一万，可输入小数。',
                  },
                ]}
              >
                <Input placeholder="请输入注册资本" addonAfter="万元" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="成立日期"
                key="foundDate"
                name="foundDate"
                rules={[
                  {
                    required: requiredFields.includes('foundDate'),
                    message: '请选择成立日期',
                  },
                ]}
              >
                <DatePicker
                  placeholder="请选择成立日期"
                  format="YYYY-MM-DD"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="营业期限开始日期"
                key="openDate"
                name="openDate"
                rules={[
                  {
                    required: requiredFields.includes('openDate'),
                    message: '请选择营业期限开始日期',
                  },
                ]}
              >
                <DatePicker
                  placeholder="请选择营业期限开始日期"
                  format="YYYY-MM-DD"
                  style={{ width: '100%' }}
                  onChange={handleOpenDateChange}
                />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="营业期限结束日期"
                key="closeDate"
                name="closeDate"
                required={requiredFields.includes('closeDate')}
                rules={() => ({
                  validator(_, value) {
                    const isRequired = requiredFields.includes('closeDate')
                    const openDateValue = getFieldValue('openDate')

                    if (isRequired && !value) {
                      return Promise.reject(new Error('请选择营业期限结束日期'))
                    }
                    if (
                      value &&
                      openDateValue &&
                      value.isBefore(openDateValue, 'day')
                    ) {
                      return Promise.reject(
                        new Error('营业期限结束日期不可早于营业期限开始日期')
                      )
                    }
                    return Promise.resolve()
                  },
                })}
              >
                <DatePicker
                  placeholder="请选择营业期限结束日期"
                  format="YYYY-MM-DD"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          ) : null}
        </Row>
      )
    }
    // 开票信息
    const billingInformation = () => {
      return (
        <Row gutter={24} type="flex" justify="start" align="middle">
          {true ? (
            <Col span={8}>
              <Form.Item
                label="纳税人类别"
                name="taxpayersType"
                key="taxpayersType"
                rules={[
                  {
                    required: requiredFields.includes('taxpayersType'),
                    message: '请选择纳税人类别',
                  },
                ]}
              >
                <Select placeholder="请选择纳税人类别">
                  {TAXPAYER_TYPE.map((value) => (
                    <Option key={value.value} value={value.value}>
                      {value.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="纳税人识别号"
                key="taxpayersNum"
                name="taxpayersNum"
                rules={[
                  {
                    required: requiredFields.includes('taxpayersNum'),
                    message: '请输入纳税人识别号',
                  },
                  { max: 18, message: '纳税人识别号不得超过10个字符' },
                ]}
              >
                <Input placeholder="请输入纳税人识别号" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="开户银行"
                name="branchBankName"
                key="branchBankName"
                rules={[
                  {
                    required: requiredFields.includes('branchBankName'),
                    message: '请输入开户银行',
                  },
                  { max: 30, message: '开户银行长度不超过30个字符' },
                ]}
              >
                <Input placeholder="请输入开户银行" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="开户名称"
                key="accountName"
                name="accountName"
                rules={[
                  {
                    required: requiredFields.includes('accountName'),
                    message: '请输入开户名称',
                  },
                  { max: 50, message: '开户名称不得多于50字' },
                ]}
              >
                <Input placeholder="请输入开户名称" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="银行账号"
                name="bankAccount"
                key="bankAccount"
                rules={[
                  {
                    required: requiredFields.includes('bankAccount'),
                    message: '请输入银行账号',
                  },
                  { max: 50, message: '请输入正确的银行账号' },
                ]}
              >
                <Input placeholder="请输入银行账号" />
              </Form.Item>
            </Col>
          ) : null}
        </Row>
      )
    }
    // 拓展信息
    const expandInformation = () => {
      return (
        <Row gutter={24} type="flex" justify="start" align="middle">
          {true ? (
            <Col span={8}>
              <Form.Item
                label="公司官网"
                name="companyWebsite"
                rules={[
                  {
                    required: requiredFields.includes('companyWebsite'),
                    message: '请输入官网',
                  },
                  { max: 200, message: '官网长度不超过200个字符串' },
                ]}
              >
                <Input placeholder="请输入官网" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="公司电话"
                name="companyPhone"
                rules={[
                  {
                    required: requiredFields.includes('companyPhone'),
                    message: '请输入电话',
                  },
                  { max: 20, message: '请输入正确的电话' },
                ]}
              >
                <Input placeholder="请输入电话" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="经营范围"
                name="bizScope"
                rules={[
                  {
                    required: requiredFields.includes('bizScope'),
                    message: '请输入经营范围',
                  },
                  { max: 200, message: '经营范围不超过200字符' },
                ]}
              >
                <Input placeholder="请输入经营范围" />
              </Form.Item>
            </Col>
          ) : null}
          {true ? (
            <Col span={8}>
              <Form.Item
                label="公司介绍"
                name="companyDscp"
                rules={[
                  {
                    required: requiredFields.includes('companyDscp'),
                    message: '请输入公司介绍',
                  },
                  { max: 200, message: '公司介绍不得超过200个字符' },
                ]}
              >
                <Input.TextArea placeholder="请输入公司介绍" />
              </Form.Item>
            </Col>
          ) : null}
        </Row>
      )
    }

    return {
      companyItem: companyInfo,
      businessInfoItem: businessInformationInfo,
      billingInfoItem: billingInformation,
      expandInfoItem: expandInformation,
    }
  }
  const { companyItem, businessInfoItem, billingInfoItem, expandInfoItem } =
    formContents()
  const changs = () => {
    setSome((prev) => {
      console.log('prev', prev)
      return true
    })
  }
  return (
    <div className="entryFrom-wapper">
      <Spin spinning={loading}>
        <Button onClick={changs}>测试</Button>
        <div className="head-img"></div>
        <div className="form-area">
          {renderTitle()}
          <Form
            onFinish={handleSubmit}
            layout="vertical"
            scrollToFirstError
            initialValues={initValue}
          >
            <div className="apply-group">基本信息</div>
            {companyItem()}
            <div className="apply-group">经营信息</div>
            {businessInfoItem()}
            <div className="apply-group">开票信息</div>
            {billingInfoItem()}
            <div className="apply-group">拓展信息</div>
            {expandInfoItem()}
            {true ? (
              <div className="agreement-wrap">
                {agreementInfo.map((item) => {
                  const { cmsMiscArticleBO } = item
                  const {
                    title: agreementTitle,
                    content: agreementContent,
                    id: agreementId,
                  } = cmsMiscArticleBO || []
                  return (
                    <div className="agreement-text" key={agreementId}>
                      <Checkbox
                        onChange={(checked) => {
                          handleChange(agreementId, checked)
                        }}
                        className="agreement-check"
                      />
                      <span
                        onClick={() => {
                          showModal(agreementTitle, agreementContent)
                        }}
                      >
                        同意
                        <span className="agreement-title">
                          《{agreementTitle}》
                        </span>
                      </span>
                    </div>
                  )
                })}
              </div>
            ) : null}
          </Form>
          <Modal
            visible={visible}
            title={title}
            closable
            onOk={handleOk}
            onCancel={handleRefuse}
            footer={
              agreementArticle ? (
                <Button key="submit" type="primary" onClick={handleOk}>
                  确定
                </Button>
              ) : (
                ((
                  <Button key="back" onClick={handleRefuse}>
                    拒绝
                  </Button>
                ),
                (
                  <Button key="submit" type="primary" onClick={handleOk}>
                    确定
                  </Button>
                ))
              )
            }
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Modal>
        </div>
      </Spin>
    </div>
  )
}

export default forwardRef(EntryForm)
