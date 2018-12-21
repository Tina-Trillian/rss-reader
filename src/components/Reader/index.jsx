import { Component } from 'preact';

import Card from './Card';

// import axios from 'axios';

export default class Reader extends Component {
  // getFeed() {
  // 	axios.get('https://beta.futurezone.de/rss.xml').then(res => {
  // 		let myObj = {};
  // 		const parseString = require('xml2js').parseString;
  // 		parseString(res.request.responseText, function(err,
  // 			result){
  // 				console.log(result)
  // 				myObj = result
  // 			})
  // 		this.setState({
  // 			feed: myObj.rss.channel[0].item
  // 		});
  // 	});
  // }

  //Reader functions with axios also, XMLHttpRequest is more stable and
  //ensures that there is the right kind of response

  getFeed() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        let myObj = {};
        const parseString = require('xml2js').parseString;
        parseString(request.responseText, (err, result) => (myObj = result));
        this.setState({
          feed: myObj.rss.channel[0].item
        });
      }
    };
    //To read another XML RSS feed the link needs to change here
    request.open('GET', 'https://beta.futurezone.de/rss.xml', true);
    request.send();
  }

  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
  }

  componentDidMount() {
    this.getFeed();
  }

  //It is possible to start an interval here to refresh the feed every 5 min
  //or so, the intervall needs to be cleared at ComponentWillUnmount()
  //For now the feed refreshes with a button click
  //Could also use Socket.io

  render() {
    const nodeArray = this.state.feed.map(el => <Card item={el} />);

    //Renders a Card component for every item in the RSS Feed

    return (
      <div id="reader">
        <h1>RSS Reader</h1>
        <button className="btn" onClick={() => this.getFeed()}>
          aktualisieren
        </button>
        {nodeArray}
      </div>
    );
  }
}
