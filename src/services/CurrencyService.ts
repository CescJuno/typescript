import axios from 'axios';

const CURRENCY_API_URL = `${process.env.REACT_APP_API_URL}`;
export default class CurrencyService {
  public static async get(): Promise<string> {
    const response = await axios.get(
      `${CURRENCY_API_URL}/live?access_key=${process.env.REACT_APP_API_KEY}`,
    );
    return response.data;
  }
}
