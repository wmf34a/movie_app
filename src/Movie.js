//import React, { Component } from 'react';  -> 함수형 컴포넌트라 {component} 필요없음
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

//class Movie extends Component {
//	static propTypes = {
//		title: PropTypes.string.isRequired,//부모 컴포넌트에서 얻는 정보의 종류가 무엇인지 알수 있음
//		poster: PropTypes.string.isRequired // isRequired-> 필수요건인지 확인
//	}
//	render(){
//	 return(
//		<div className="Movie">
//			<div className="MoviePoster">
//			<MoviePoster poster={this.props.poster}/>
//			</div>
//			<h1>{this.props.title}</h1>
//		</div>
//	 );
//	}
//}

//class MoviePoster extends Component {
//	static propTypes = {
//		poster: PropTypes.string.isRequired
//	}
//	render(){
//		return(
//			<img src= {this.props.poster} alt="Movie Poster"/>	
//		)
//	}
//}
function Movie({title, poster, genres, synopsis}){
	return(
		<div className="Movie">
			<div className="Movie__Column">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className="Movie__Column">
				<h1>{title}</h1>
			<div className="Movie__Genres">
				{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
			</div>
			<div className="Movie_Synopsis">
			<LinesEllipsis
				text={synopsis}
				maxLine='3'
				ellipsis=' ...'
				trimRight
				basedOn='letters'
				/>
			</div>
		</div>
	</div>
	)
}
function MovieGenre({genre}){
	return(
		<span className="Movie__Genre">{genre} </span>  
	)
}

function MoviePoster({poster, alt}){// 위 클래스형 컴포넌트와 같다
	return(
		<img src= {poster} alt={alt} title={alt} className="Movie__Poster"/>	
	)
}
Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.string.isRequired,
	synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired
}
export default Movie;
