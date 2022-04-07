import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'user' })
class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number // 主键id
  @Column
  name!: string // 姓名
  @Column
  email!: string // 邮箱
  @Column
  mobile!: string // 手机
  @Column
  password!: string // 密码
  @Column
  age!: number // 年龄
}

export default User
