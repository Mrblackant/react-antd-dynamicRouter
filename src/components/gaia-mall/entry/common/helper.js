import _find from 'lodash/find'
import _get from 'lodash/get'

/**
 * 构造后端格式的省市区地址信息
 * @param districtList
 */
export function getReceiveAddress(districtList) {
  const oCity = _find(districtList, { districtLevel: 2 })
  const oRegion = _find(districtList, { districtLevel: 3 })
  const oStreet = _find(districtList, { districtLevel: 4 })
  const oProvince = _find(districtList, { districtLevel: 1 })
  const cityId = _get(oCity, 'id', '')
  const city = _get(oCity, 'districtName', '')
  const cityCode = _get(oCity, 'districtCode', '')
  const regionId = _get(oRegion, 'id', '')
  const region = _get(oRegion, 'districtName', '')
  const regionCode = _get(oRegion, 'districtCode', '')
  const streetId = _get(oStreet, 'id', '')
  const street = _get(oStreet, 'districtName', '')
  const streetCode = _get(oStreet, 'districtCode', '')
  const provinceId = _get(oProvince, 'id', '')
  const province = _get(oProvince, 'districtName', '')
  const provinceCode = _get(oProvince, 'districtCode', '')
  return {
    city,
    region,
    street,
    province,
    cityId,
    regionId,
    streetId,
    provinceId,
    cityCode,
    regionCode,
    streetCode,
    provinceCode,
  }
}
