import Header from '../../components/index/Header.js';
import DetailContainer from '../../components/blogDetail/Container.js';
import Comment from '../../components/comment/comment.js';
import axios from 'axios';

const BlogDetail = ({ data }) => {
	// const classes = useStyles()

	return (
		<div>
			<Header />
			<DetailContainer data={data} />
			<Comment />
		</div>
	)	
}

export default BlogDetail

export async function getServerSideProps(context) {
	const response = await axios.get('http://localhost:3000/api/blog', {
		params: {
			id: context.query.id,
		}
	})
	console.log(response.data[0], 'response check')
	return {
	  props: {
			data: response.data[0],
	  }
	}
}