import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'user' })
class User extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number // 主键id
  @Column({field: 'user_name'})
  user_name!: string // 姓名
  @Column
  login_name!: string
  @Column
  avatar_url!: string
  @Column
  gender!: number
  @Column
  password!: string
  @Column
  phone!: string
  @Column
  email!: string // 邮箱
  @Column
  status!: number
}

export default User
