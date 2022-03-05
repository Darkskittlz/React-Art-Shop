import styled from 'styled-components';

export const Box = styled.div`
backdrop-filter: blur(10px);
bottom: 0;
display: flex;
width: 100%;
margin-top: 180px;


@media (max-width: 1000px) {
	margin-top: 20px;
	left: -20px;
	flex-direction: column;
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

