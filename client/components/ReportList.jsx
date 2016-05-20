import React from 'react';

export default class ReportList extends React.Component {

  handleSelection(r) {
    this.props.onSelection(r)
  }

  render() {
    const { reports, onSelection } = this.props;
    var that = this;

    const reportList = reports.map((r,i) => 
      <div 
        key={i} 
        onClick={this.handleSelection.bind(that, r)} 
        className="report-list-item">
        {r.title}
      </div>)
    return <div onClick={this.handleSelection} >{reportList}</div>
  }
}

ReportList.defaultProps = {
  onSelection: function(r) { console.log("report selected", r)  },
  reports: [
    {
      "body": "Quo eius et laboriosam et deleniti. Quis vel qui illo maiores modi. Molestiae blanditiis quo quia ipsa officia deleniti. Enim modi ratione porro dolorem eum.\n \rRatione iste placeat perspiciatis. Laudantium magni ea ullam quae culpa. Quidem unde maiores reiciendis rerum provident sed. Voluptatibus saepe ullam debitis iure. Ex tempora laboriosam quo in. Aut maiores commodi quos omnis tempora.\n \rIpsam laborum modi sint eos culpa tempora. Rerum velit illo tempora eaque recusandae. Magnam architecto nulla vel harum vel perferendis animi.",
      "created": "2015-09-25T19:49:26.782Z",
      "id": "7e8a59b1-b758-4b30-8179-c62f0931e5ce",
      "title": "Est inventore iusto inventore repudiandae amet fugit eaque minus.",
      "updated": "2015-09-25T19:49:26.782Z"
    },
    {
      "body": "Asperiores fuga incidunt recusandae sunt aut deleniti omnis qui eveniet. Unde voluptatum animi repudiandae excepturi consequatur iste asperiores. Id est laborum eveniet velit nemo adipisci.\n \rEaque illum pariatur vel nam cum voluptatum vel laboriosam. Ipsam at ut commodi blanditiis doloremque quia ut et. Repudiandae velit magnam ad ratione quo molestiae tempore. Consectetur perspiciatis eaque. Sit quidem pariatur similique cumque.\n \rRepellat impedit rerum quia ipsam excepturi dolore autem alias asperiores. Quae sint et consequatur et. Quasi omnis corporis laboriosam beatae et rerum deserunt et.",
      "created": "2015-07-01T11:24:17.098Z",
      "id": "ac2f8cdc-8041-4cce-9d33-7be2fef9e039",
      "title": "Dignissimos laboriosam rerum accusantium.",
      "updated": "2015-07-01T11:24:17.098Z"
    }
  ]
}