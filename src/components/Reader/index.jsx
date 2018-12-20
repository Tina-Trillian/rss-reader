import { Component } from "preact";

import Card from "./Card";

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

  getFeed() {
    console.log("Get Feed");
    let request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        var myObj = {};
        const parseString = require("xml2js").parseString;
        parseString(request.responseText, function(err, result) {
          myObj = result;
        });
        this.setState({
          feed: myObj.rss.channel[0].item
        });
      }
    };
    request.open("GET", "https://beta.futurezone.de/rss.xml", true);
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

  render() {
    const nodeArray = this.state.feed.map(el => {
      return <Card item={el} />;
    });

    return (
      <div id="reader">
        <h1>RSS Reader</h1>
		<button className="btn" onClick={() => this.getFeed()}>aktualisieren</button>
        {nodeArray}
      </div>
    );
  }
}
