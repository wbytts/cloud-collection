import { Model, Table, Column } from 'sequelize-typescript'

@Table({ tableName: 'category' })
class Category extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number // 主键id

  @Column
  remark!: String
}

export default Category
