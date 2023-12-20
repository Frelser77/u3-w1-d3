import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
	state = {
		selected: false,
	};

	handleClick = () => {
		this.setState((prevState) => ({
			selected: !prevState.selected,
		}));
	};
	render() {
		const { book } = this.props;
		const cardStyle = this.state.selected ? { border: "2px solid red" } : {};

		return (
			<Col xs="auto">
				<Card className="h-100" style={cardStyle} onClick={this.handleClick}>
					<Card.Img
						className="img-fluid"
						variant="top"
						src={book.img}
						alt={`Copertina di ${book.title}`}
						style={{ height: "200px", objectFit: "cover" }}
					/>
					<Card.Body className="brownCard">
						<Card.Title className="card-title">{book.title}</Card.Title>
						<Card.Text className="card-pric">
							Prezzo: <span className="badge bg-success">€{book.price}</span>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
