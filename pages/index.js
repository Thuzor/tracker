import {withApollo} from "../lib/apollo";
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import HabitList from '../components/HabitList';

const HELLO_QUERY = gql`
    query HelloQuery {
        sayHello
    }
`;

const Home = () => {
    const {data, loading, error} = useQuery(HELLO_QUERY);

    if (loading) return <div/>;

    return (
        <Layout>
            <div className='hero'>
                <h1 className='title'>Habit Tracker</h1>
                <HabitList />
            </div>
            <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title {
        text-align: center;
      }
    `}</style>
        </Layout>
    );
}

export default withApollo(Home)
