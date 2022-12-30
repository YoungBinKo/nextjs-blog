import { Table, Grid } from "@nextui-org/react"

export default function IngredientsTable(props) {
  const ingredients = props.ingredients

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "quantity",
      label: "QUANTITY",
    },
    {
      key: "note",
      label: "NOTE",
    },
  ]

  return (
    <>
      <Grid.Container gap={0}>
        <Grid xs={12} css={{ paddingBottom: 0 }}>
          <h4>Ingredients</h4>
        </Grid>  
        <Grid xs={12}>
          {ingredients.length > 0 && 
            <Table
              sticked
              aria-label="Recipe ingredients"
              css={{
                height: "auto",
                minWidth: "100%",
                paddingTop: 0,
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column key={column.key} css={{ minWidth: "100px" }}>{column.label}</Table.Column>
                )}
              </Table.Header>
              <Table.Body items={ingredients}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          }
        </Grid>
      </Grid.Container>
    </>
  )
}
