import React, { useState } from "react";
import { View, Text, textInput, Botton, StyleSheet } from "react-native";

 const LoginScreen = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState(''); 

 const handleLogin = () => {
         console.log(`Login com Email: ${email} e senha: ${password}`)
 };
}; 