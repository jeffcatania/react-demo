import React from 'react';
import SearchBox from './SearchBox.jsx'
import ReportList from './ReportList.jsx'
import ReportViewer from './ReportViewer.jsx'
import MessengerLayout from './MessengerLayout.jsx'
import d3 from 'd3'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reports: [],
      selectedReport: {},
      filterText: ""
    }
  }

  handleSearchText(filterText) {
    this.setState({ filterText })
  }

  handleReportSelection(selectedReport) {
    this.setState({ selectedReport })
  }

  componentWillMount() {
    var that = this;
    d3.json("http://localhost:3333/reports", function(err, reports ) {
      that.setState({ reports })
    }) 
  }
  
  render() {
    var that = this;
    const { selectedReport, reports, filterText } = this.state;
    const filteredReports = reports
      .filter(r=> r.title.search(filterText) >= 0)
      .sort(function(a,b){ return new Date(b.created) - new Date(a.created) })

    return (
      <div className='App'>
         <MessengerLayout
            header={<SearchBox 
                      searchText={filterText} 
                      onUserInput={this.handleSearchText.bind(this)} />}
                    leftPane={<ReportList reports={filteredReports} onSelection={this.handleReportSelection.bind(this)} />}
          >
            <ReportViewer report={ selectedReport }  />
          </MessengerLayout>
        </div>
    );
  }
}