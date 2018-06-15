import { combineReducers } from 'redux';
import ContactReducer from '../Components/ContactComponent/ContactReducer';
import ServivePreferenceReducer from '../Components/ServicePreferenceComponent/ServicePreferenceReducer';
import KidsSelectionReducer from '../Components/KidsSelectionComponent/KidsSelectionReducer';
import ClothesBrandReducer from '../Components/ClothesBrandComponent/ClothesBrandReducer';
import WhatToBuyReducer from '../Components/WhatToBuyComponent/WhatToBuyReducer';
import SizeAndProportionReducer from '../Components/SizeAndProportionComponent/SizeAndProportionReducer';
import ChildInfoReducer from "../Components/ChildInformation/ChildInfoReducer";
import PregnancyDueDateReducer from "../Components/PregnancySelectionComponent/PregnancyDueDateReducer";

import TalkToUsReducer from "../Components/TalkToUs/TalkToUsReducer";
import MyBoxReducer from "../Components/MyBoxComponent/MyBoxReducer";

import StyleReducer from "../Components/StyleComponent/StyleReducer";
import billingInfoReducer from "../Components/BillingComponent/BillingContactReducer";
import billingInfoshipmentReducer from "../Components/BillingComponent/BillingShipmentReducer"

import appIntroReducer from "../Components/AppIntro/AppIntroReducer"
import SignInReducer from "../Components/SignInComponent/SignInReducer";
import ProfileRerducer from "../Components/ProfileComponent/ProfileRerducer";
//import MyKidsReducer from "../Components/MyKidsComponent/MyKidsReducer";
import OrderHistoryReducer from "../Components/OrderHistory/OrderHistoryReducer";

import updatebillingInfoReducer from "../Components/UpdateBillingComponent/UpdateBillingContactReducer";
import updatebillingInfoshipmentReducer from "../Components/UpdateBillingComponent/UpdateBillingShipmentReducer"



export default combineReducers({

	contactReducer: ContactReducer,
	servivePreferenceReducer:ServivePreferenceReducer,
	kidsSelectionReducer:KidsSelectionReducer,
	clothesBrandReducer:ClothesBrandReducer,
	whatToBuyReducer:WhatToBuyReducer,
	sizeAndProportionReducer:SizeAndProportionReducer,
	childInfoReducer:ChildInfoReducer,
	pregnancyDueDateReducer:PregnancyDueDateReducer,

	talkToUsReducer:TalkToUsReducer,
	myBoxReducer:MyBoxReducer,
	styleReducer:StyleReducer,
	billingInfoReducer:billingInfoReducer,
	billingInfoshipmentReducer:billingInfoshipmentReducer,
	appIntroReducer:appIntroReducer,
	SignInReducer   : SignInReducer,
	ProfileRerducer : ProfileRerducer,
	OrderHistoryReducer : OrderHistoryReducer,
	updatebillingInfoReducer : updatebillingInfoReducer,
	updatebillingInfoshipmentReducer : updatebillingInfoshipmentReducer


});