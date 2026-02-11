import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, deletePost, setPage } from "./PostsSlice"
import Card from "../../components/Card"
import Pagination from "../../components/Pagination"

export default function Posts() {
	const dispatch = useDispatch()
	const { allPosts, status, currentPage, postsPerPage } = useSelector(
		(state) => state.posts,
	)

	useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	if (status === "loading") return <h2>Loading...</h2>

	const lastIndex = currentPage * postsPerPage
	const firstIndex = lastIndex - postsPerPage
	const currentPosts = allPosts.slice(firstIndex, lastIndex)

	return (
		<>
			<div className="cards-container">
				{currentPosts.map((post) => (
					<Card
						key={post.id}
						post={post}
						onDelete={() => dispatch(deletePost(post.id))}
					/>
				))}
			</div>

			<Pagination
				totalPosts={allPosts.length}
				postsPerPage={postsPerPage}
				currentPage={currentPage}
				onPageChange={(page) => dispatch(setPage(page))}
			/>
		</>
	)
}
