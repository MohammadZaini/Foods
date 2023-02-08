import React,{useState, useEffect} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import Searchbar from "./components/SearchBar";
import useResults from "./hooks/useResults";
import ReslutsList from "./components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    }

    return (
    <View>
        <Searchbar 
            term={term}
            onTermChange = {setTerm} 
            onTermSubmit = {() => searchApi(term)}
            />

            <ScrollView>
                <ReslutsList 
                results={filterResultsByPrice('$')}
                title='Cost Effective'
                />

                <ReslutsList 
                results={filterResultsByPrice('$$')} 
                title='Bit Pricer'
                />

                <ReslutsList 
                results={filterResultsByPrice('$$$')} 
                title='Big Spender'
                />

            </ScrollView>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
)}

const styles = StyleSheet.create({});

export default SearchScreen;