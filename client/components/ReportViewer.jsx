import React from 'react';

export default class ReportViewer extends React.Component {

  render() {
    const { report } = this.props;

    if (Object.keys(report).length === 0) {
      return (
        <div>
          <h1>No Report Selected</h1>
        </div>
    );
    }
    return (
      <div>
        <h1>{report.title}</h1>
        <p>{report.body}</p> 
      </div>
    );
  }
}


ReportViewer.defaultProps = {
  report: {
      "body": "Quo eius et laboriosam et deleniti. Quis vel qui illo maiores modi. Molestiae blanditiis quo quia ipsa officia deleniti. Enim modi ratione porro dolorem eum.\n \rRatione iste placeat perspiciatis. Laudantium magni ea ullam quae culpa. Quidem unde maiores reiciendis rerum provident sed. Voluptatibus saepe ullam debitis iure. Ex tempora laboriosam quo in. Aut maiores commodi quos omnis tempora.\n \rIpsam laborum modi sint eos culpa tempora. Rerum velit illo tempora eaque recusandae. Magnam architecto nulla vel harum vel perferendis animi.",
      "created": "2015-09-25T19:49:26.782Z",
      "id": "7e8a59b1-b758-4b30-8179-c62f0931e5ce",
      "title": "Est inventore iusto inventore repudiandae amet fugit eaque minus.",
      "updated": "2015-09-25T19:49:26.782Z"
    }
}