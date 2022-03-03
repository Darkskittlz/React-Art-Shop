import styled from 'styled-components';

export const Box = styled.div`
backdrop-filter: blur(10px);
bottom: 0;
left: 0;
display: flex;
width: 100%;
margin-top: 180px;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`

