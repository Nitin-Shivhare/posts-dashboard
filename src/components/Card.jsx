export default function Card({ post, onDelete }) {
	const imageUrl = `https://picsum.photos/seed/${post.id}/400/250`

	return (
		<div className="card">
			<button className="close-btn" onClick={onDelete}>
				✕
			</button>

			<div className="card-body">
				<h3 className="card-title">{post.title.slice(0, 40)}...</h3>

				<p className="card-text">{post.body.slice(0, 90)}...</p>

				<p className="card-date">Mon, 21 Dec 2020 14:57 GMT</p>
			</div>

			<img src={imageUrl} alt="post" className="card-image" />
		</div>
	)
}
