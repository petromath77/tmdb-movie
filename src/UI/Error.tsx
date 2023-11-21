import styled from 'styled-components';

type Props = {
  title: string,
};

const Error: React.FC<Props> = ({title}) => {
  return (
    <ErrorElement>{title}</ErrorElement>
  )
}

const ErrorElement = styled.div`
  margin: 15px 0;
  color: #d10303;
`

export default Error