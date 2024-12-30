import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Component render', () => {
  it('should render the text "Olá testes no React Native"', () => {
    const { getByText } = render(<App />)

    expect(getByText('Olá testes no React Native')).toBeTruthy()
  })
})