import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useReults from '../hooks/useResults';

const SearchScreen = () => {
        const [term, setTerm] = useState('');
        const [searchApi, results, errorMessage] = useReults();

        const filterResultByPrice = (price) => {

            return results.filter(result => {
                return result.price === price;
            });
        };

        return ( < >

            <
            SearchBar term = { term }
            onTermChange = { setTerm }
            onTermSubmit = {
                () => searchApi(term)
            }
            />

            {
                errorMessage ? <
                    Text > { errorMessage } < /Text> : null}



                <
                ScrollView >





                    <
                    ResultsList results = { filterResultByPrice('$') }
                title = "Cost Effective" /
                    >


                    <
                    ResultsList results = { filterResultByPrice('$$') }
                title = "Bit Pricer" /
                    >


                    <
                    ResultsList results = { filterResultByPrice('$$$') }
                title = "Big Spender" /
                    >

                    <
                    /
                ScrollView >


                    <
                    />
            );
        };

        const styles = StyleSheet.create({});

        export default SearchScreen;