/**
 * 时间日期常用工具
 * @author wangby
 */

/**
 * 将日期对象默认转换为 年-月-日 时:分:秒 的形式
 * @param {*} d 日期Date对象
 * @param {*} formatStr 格式化字符串,默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns 格式化之后的时间字符串
 */
export function dateFormat(d, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(d).format(formatStr)
}

