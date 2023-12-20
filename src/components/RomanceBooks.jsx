import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import booksRomanceData from "../data/romance.json";
import ButtonCard from "./buttonCard.jsx";
function BooksRomance() {
	const category = booksRomanceData[0].category;

	return (
		<Container id="Romance">
			<a href="#basic-nav-dropdown">
				<h2 className="my-5 pointer">{category.toUpperCase()}</h2>
			</a>
			<Row xs={1} md={2} lg={3} className="g-4">
				{booksRomanceData.map((book, idx) => (
					<Col key={"Romance" + idx}>
						<Card className="h-100">
							<Card.Img
								className=" img-fluid"
								variant="top"
								src={book.img}
								alt={`Copertina di ${book.title}`}
								style={{ height: "200px", objectFit: "cover" }}
							/>
							<Card.Body className="d-flex flex-column justify-content-between align-items-center">
								<Card.Title>{book.title}</Card.Title>
								<Card.Text>Prezzo: €{book.price}</Card.Text>
								<ButtonCard />
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default BooksRomance;
