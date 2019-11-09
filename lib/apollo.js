import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';

export function withApollo(PageComponent) {

    const WithApollo = (props) => {
        const client = initApolloClient();


        return (
            <ApolloProvider client={client}>
                <PageComponent {...props} />
            </ApolloProvider>
        )
    };

    return WithApollo;
}

const initApolloClient = () => {
    const client = new ApolloClient({
        uri: 'http://localhost:3000/api/graphql',
        fetch
    });

    return client;
}