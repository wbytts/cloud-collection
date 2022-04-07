import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'tag' })
class Tag extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number // 主键id

  @Column
  remark!: String
}

export default Tag
