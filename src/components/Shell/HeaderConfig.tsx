/**
 * @file Header mocks.
 * @copyright Jacto Security 2018
 */

 import React from 'react';




 import { url } from './url';
 import labels from './Header.json';
 
 const hasSearch = true;
 const hasSearchError = false;
 
 const links = {
   product: url(),
   profile: url(),
   registration: url(),
   sign_in: url(),
   sign_out: url("/api/auth/signout"),
   edit_profile: url(),
   notifications_preferences: url(),
   notifications_view_all: url(),
 };
 
 const accounts = new Array(3).fill(0).map((name = `Company`, id) => ({
   id: id.toString(),
   name: `${name} ${id + 1}`,
 }));
 
 const notifications = [
   {
     id: `notification__0`,
     description: 'Um novo desenho foi cadastrado',
     href: url(),
     product: 'Application 3',
     datetime: 'Fri Dec 21 2018 18:57:08 GMT-0600 (Central Standard Time)',
     label: '11min ago',
   },
 ];
 
 const profile = {
   image_url: null,
   name: {
     first_name: 'Sample',
     surname: 'User',
   },
   description: (
     <span>
       Descrição do usuário{' '}
       <a href="#example">example link.</a>
     </span>
   ),
 };
 
 const profileWithAccount = Object.assign({}, profile, {
   email: 'example@Jacto.com',
   account: accounts[0],
 });
 
 const profileWithAccountLongName = Object.assign({}, profile, {
   email: 'example@Jacto.com',
   account: {
     ...accounts[0],
     name: `${accounts[0].name} plus more text to make the name super super long`,
   },
 });
 const defaultSearchValue = '127.0.0.1';
 
 export {
   defaultSearchValue,
   hasSearch,
   hasSearchError,
   labels,
   links,
   accounts,
   notifications,
   profile,
   profileWithAccount,
   profileWithAccountLongName,
 };