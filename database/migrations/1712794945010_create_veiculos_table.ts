import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("marca")
      table.string("modelo")
      table.integer("ano_fabricacao")
      table.integer("ano_modelo")
      table.integer("renavam")
      table.string("placa")
      table.string("cor")
      table.boolean("ativo")

      table.enum("situacao", ['liberado', 'manutencao']).defaultTo('liberado').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}