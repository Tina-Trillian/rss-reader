

const Card = ({item}) => {
    return (
        <div>
            <h2><a href={item.link}>{item.title}</a></h2>
            <p>{item.description}</p>
        </div>
    );
};

export default Card;