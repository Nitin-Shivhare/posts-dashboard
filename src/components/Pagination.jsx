export default function Pagination({
	totalPosts,
	postsPerPage,
	currentPage,
	onPageChange,
}) {
	const totalPages = Math.ceil(totalPosts / postsPerPage)

	return (
		<div className="pagination">
			<button
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				Prev
			</button>

			{[...Array(totalPages)].map((_, index) => (
				<button
					key={index}
					onClick={() => onPageChange(index + 1)}
					className={currentPage === index + 1 ? "active" : ""}
				>
					{index + 1}
				</button>
			))}

			<button
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next
			</button>
		</div>
	)
}
