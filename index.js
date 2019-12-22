
import React from 'react';
import ReactDOM from 'react-dom';
/* import { Field,reduxForm } from 'redux-form'
 
import { LocationSearchInput } from "./connection"; */ 

class MyForm extends React.Component {
  render() {
    return (
		<form>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
			<script src="C://Users//others//myreact//src//autocomplete.js"></script>
			<h1>WeWard </h1>
			<p>Title:</p>
			<input type="text"/>
			<p>Start date:</p>
			<input type="date"/>
			<p>Campaign description:</p>
			<input type="text"/>
			<p>Reward:</p>
			<input type="text"/>
			<div class="container">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<p class="panel-title">Add your Address:</p>
					</div>
					<div class="panel-body">
						<input id="autocomplete" placeholder="Enter your address" onFocus="geolocate()" type="text" onchange="geolocate()" class="form-control"/>
						<div id="address">
							<div class="row">
								<div class="col-md-6">
									<label class="control-label">Street address</label>
									<input class="form-control" id="street_number" />
								</div>
							<div class="col-md-6">
								<label class="control-label">Route</label>
								<input class="form-control" id="route"/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label class="control-label">City</label>
								<input class="form-control field" id="locality"/>
							</div>
							<div class="col-md-6"> 
								<label class="control-label">State</label>
								<input class="form-control" id="administrative_area_level_1"/>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<label class="control-label">Zip code</label>
								<input class="form-control" id="postal_code"/>
							</div>
							<div class="col-md-6">
								<label class="control-label">Country</label>
								<input class="form-control" id="country"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAZkGgzuQvyQPjsBnvFIOdXroL4_M-KJvE&libraries=places&callback=initAutocomplete" async defer></script>
	</form>
	  
    );
  }
}
ReactDOM.render(<MyForm/>, document.getElementById('root'));


