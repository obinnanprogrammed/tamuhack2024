import React, { useState } from 'react'
import { Alert, StyleSheet, View, AppState } from 'react-native'
import { supabase } from './supabase'
import { Button, Input } from 'react-native-elements'

AppState.addEventListener("change", (state) => {
    if(state === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

export default async function handleSignUp() {
    try {
        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if(error) {
            console.error(error); // replace with conditionally rendered "Invalid username or password"
        } else {
            console.log("User signed up:", user);
        }
    } catch(e) {
        console.error(e);
    }
}