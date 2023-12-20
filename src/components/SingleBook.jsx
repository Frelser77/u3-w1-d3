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

		return (
			<Col xs="auto">
				<Card
					className="h-100 pointer"
					onClick={this.handleClick}
					style={{ borderColor: this.state.selected ? "red" : " " }}
				>
					<Card.Img
						className="img-fluid"
						variant="top"
						src={book.img}
						alt={`Copertina di ${book.title}`}
						style={{ height: "200px", objectFit: "cover" }}
					/>
					<Card.Body className="brownCard rounded-bottom border-top border-black">
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
