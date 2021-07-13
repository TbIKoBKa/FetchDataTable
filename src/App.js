import React from 'react'
import Table from './Table'
import DetailedInfo from './DetailedInfo';
import FilterTable from './FilterTable';
import './index.css';

class App extends React.Component
{
    constructor(){
        super()
        this.state = { 
            isLoaded: false,
            data: null,
            sortType: 'asc',
            sortCol: 'id',
            detailedItem: null,
            filterValue: ''
        };
    }
    
    async componentDidMount(){
        const data = await fetch('http://www.filltext.com/?rows=1000&id={index}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true')
                        .then(response => {
                            return response.json();
                        })
                        .catch(error => {
                            console.log(error);
                        })

        this.setState({data, isLoaded: true});
    }

    toSort = async (sortCol) => {
        let data = this.state.data.slice();
        
        await this.setState({sortType: (this.state.sortType === 'asc') ? 'desk' : 'asc', sortCol});
        
        data.sort((a, b) => {
            if(a[sortCol] < b[sortCol])
                return this.state.sortType === 'asc' ? -1 : 1;
            if(a[sortCol] > b[sortCol])
                return this.state.sortType === 'ask' ? 1 : -1;
            return 0;
        });
        
        this.setState({data} );
    }

    toDetail = async (item) => {
        await this.setState({detailedItem: item})
        //console.log(this.state.detailedItem);
    }

    onFilter = (value) => {
        this.setState({filterValue: value});
    }

    toFilterData(){
        const {data, filterValue} = this.state;
        if(!filterValue)
            return data;
        
        return data.filter(item => {
            return  item['id'].toString().toLowerCase().includes(filterValue.toLowerCase())
                    || item['fname'].toString().toLowerCase().includes(filterValue.toLowerCase())
                    || item['lname'].toString().toLowerCase().includes(filterValue.toLowerCase())
                    || item['tel'].toString().toLowerCase().includes(filterValue.toLowerCase())
                    || item['city'].toString().toLowerCase().includes(filterValue.toLowerCase())
            
        })
    }

    render()
    {
        const filterData = this.toFilterData();

        return(
            !this.state.isLoaded
            ? <h1>Loading</h1>
            : 
            <div className="container">
                <div className="box-border">
                    <FilterTable onFilter={this.onFilter}/>
                </div>
                <div className="box-border">
                    <Table data={filterData} sortType={this.state.sortType} sortCol={this.state.sortCol} toSort={this.toSort} toDetail={this.toDetail}/>
                </div>
                {
                    this.state.detailedItem != null
                    ? <div className="box-border"><DetailedInfo item={this.state.detailedItem}/></div>
                    : null
                }
            </div>       
        )
    }
}

export default App