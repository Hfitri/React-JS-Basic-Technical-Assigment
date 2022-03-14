import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

function CatItem(item) {

    const handleClick = (event) => {
        event.preventDefault();
        alert(item.name + " : " + item.description);
    }

    return (
        <div>
            <Card.Body style={{ background: "LemonChiffon" }}>
                <Card.Title className="title">{item.name}</Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left", color: "black" }}>Origin : {item.origin}</Card.Text>
                <a onClick={handleClick} class="btn btn-info">Info</a>
            </Card.Body>
        </div>
    )
}

export default CatItem;