import React from 'react';

class FixedTable extends React.Component {
  render() {
    const rowElements = this.props.rows.map((obj, index) => {
      return (
        <div className="row" key={index}>
          <div className="small-9 columns">
            {React.createElement(this.props.component,
              { data: obj,
                onValueChange: (subfield, update) => {
                  const rows = this.props.rows.slice();
                  const newRow = Object.assign({}, rows[index]);
                  newRow[subfield] = update;
                  rows[index] = newRow;
                  this.props.onRowsUpdate(rows);
                }
              })}
          </div>
        </div>
      );
    });
    return (
      <div>
        {rowElements}
      </div>
    );
  }
}

FixedTable.propTypes = {
  component: React.PropTypes.func.isRequired,
  onRowsUpdate: React.PropTypes.func.isRequired,
  rows: React.PropTypes.array.isRequired
};

export default FixedTable;
