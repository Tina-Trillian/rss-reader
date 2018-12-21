const Card = ({ item }) => {
  let imageURL = item.enclosure
    ? 'url(' + item.enclosure[0].$.url + ')'
    : 'url(' +
      'http://beta.futurezone.de/img/215810919-768x432-Samsung-Galaxy-Kameras.jpg' +
      ')';
  //default picture in the same size to prevent errors when no picture URL is present
  return (
    <div className="card" style={{ backgroundImage: imageURL }}>
      <div className="card-content">
        <h2 className="card-headline">
          <a href={item.link}>{item.title}</a>
        </h2>
        <h3 className="card-headline">{item.category}</h3>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
