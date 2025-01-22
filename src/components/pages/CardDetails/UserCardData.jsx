import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const UserCardData = (id) => {
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://672a07666d5fa4901b6f7076.mockapi.io/card/?id=${id}`);
                const data = await response.json();
                if (!data || !data.length) {
                    throw new Error('Данные не найдены');
                }
                setCardData(data[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return { cardData, loading, error };
};
UserCardData.propTypes = {
  id: PropTypes.string.isRequired,
};
export default UserCardData;