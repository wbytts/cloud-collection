import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'role' })
class Role extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number // 主键id
  @Column
  name!: String
  @Column
  remark!: String
}

export default Role
