import React, { useEffect, useState } from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import styled from 'styled-components';
import WORLD from './WORLD.json'
// import MouseTooltip from 'react-sticky-mouse-tooltip';
import { Button, Space, Spin, Typography } from 'antd';
// import { mapCalculations } from '../../heplers/map.helper';
import flagPK from './../../assets/flags/pk.svg'
import flagAE from './../../assets/flags/ae.svg'
import flagAF from './../../assets/flags/af.svg'
import flagBH from './../../assets/flags/bh.svg'
import flagIQ from './../../assets/flags/iq.svg'
import flagIR from './../../assets/flags/ir.svg'
import flagJO from './../../assets/flags/jo.svg'
import flagKW from './../../assets/flags/kw.svg'
import flagLB from './../../assets/flags/lb.svg'
import flagLK from './../../assets/flags/lk.svg'
import flagMM from './../../assets/flags/mm.svg'
import flagMV from './../../assets/flags/mv.svg'
import flagOM from './../../assets/flags/om.svg'
import flagPS from './../../assets/flags/ps.svg'
import flagQA from './../../assets/flags/qa.svg'
import flagSA from './../../assets/flags/sa.svg'
import flagSy from './../../assets/flags/sy.svg'
import flagYE from './../../assets/flags/ye.svg'
import './Map.css';
import { ReloadOutlined } from '@ant-design/icons';
import Tooltip from '../Tooltip/Tooltip';

const { Text } = Typography
export default function CustomMap({
    showAllCountries,
    viewBox,
    fromVuse,
    fromVelo,
    clusterIds,
    isLoading,
    onCountryClick,
    data,
    getBrands,
    reloadData,
    showBrands,
    setShowBrands,
    clusterCalculatedData,
    setClusterCalculatedData,
    showData,
    showCluster,
    setShowCluster,
    setShowData,
    setClusterIds,
    selectedCountries,
    setSelectedCountries,
    setSelectedCountriesPods,
    cluster,
    showRunrateIms,
    setCluster,
    vuseSelectedCountry,
    setVuseSelectedCountry
}) {

    const [showTootltip, setShowTootltip] = React.useState(false);
    const [howeredCountry, setHoweredCountry] = React.useState("");
    const [selectedCountryId, setSelectedCountryId] = React.useState("");
    const [hovered, setHovered] = React.useState('None');
    const [focused, setFocused] = React.useState('None');
    const [clicked, setClicked] = React.useState('None');
    const [current, setCurrent] = React.useState("pk");
    const [selectedCountryData, setSelectedCountryData] = React.useState(null);

    const getCluster = (idsArray) => {
        const saudiCond = showCluster === "Gulf Cluster" || showCluster === "Iraq" || showCluster === "Levant Cluster"
        const levantCond = showCluster === "Gulf Cluster" || showCluster === "Iraq" || showCluster === "Saudi Arabia"
        const iraqCond = showCluster === "Gulf Cluster" || showCluster === "Levant Cluster" || showCluster === "Saudi Arabia"
        const gulfCond = showCluster === "Iraq" || showCluster === "Levant Cluster" || showCluster === "Saudi Arabia"
        return idsArray.map((id) => {
            return `&[id=${id}] {
                stroke: white;
                    fill: ${id === "pk" ? "#d9b371" :
                    id === "af" ? "#d5ed98" :
                        id === "ir" ? "#8fed8a" :
                            id === "lk" ? "#878ced" :
                                id === "sa" ? saudiCond ? "#bcc4f5" : "#878ced" :
                                    id === "iq" ? iraqCond ? "#bcc4f5" : "#9d73bd" :
                                        id === "jo" ? levantCond ? "#bcc4f5" : "#ed4e8e" :
                                            id === "lb" ? levantCond ? "#bcc4f5" : "#72a14c" :
                                                id === "sy" ? "#878ced" :
                                                    id === "qa" ? gulfCond ? "#bcc4f5" : "#eb98a2" :
                                                        id === "ye" ? gulfCond ? "#bcc4f5" : "#eb98a2" :
                                                            id === "kw" ? gulfCond ? "#bcc4f5" : "#c47037" :
                                                                id === "bh" ? gulfCond ? "#bcc4f5" : "#27dde3" :
                                                                    id === "ae" ? gulfCond ? "#bcc4f5" : "#27dde3" :
                                                                        "#62DAAB"};
                }`
        })
    }

    useEffect(() => {
        setCluster(getCluster(clusterIds))
    }, [clusterIds])


    useEffect(() => {
        // const countryData = mapCalculations(data)
        // console.log({ clusterCalculatedData: clusterCalculatedData.sum_actual })
        setClusterCalculatedData(data)
    }, [data])

    const Map = styled.div`
        margin: 1rem auto;
        width: 100%;
        background-color: #DCE3F2;
        svg {
            
            // All layers are just path elements
            path {
                fill: #6395F9;
                cursor: pointer;
                outline: none;
                
                // // When a layer is hovered
                // &:hover {
                //     fill: #62DAAB;
                // }
                
                // // When a layer is focused.
                // &:focus {
                //     fill:  #62DAAB;
                // }
                
                // // When a layer is 'checked' (via checkedLayers prop).
                // &[aria-checked='true'] {
                //     fill:  #62DAAB;
                // }

                ${cluster}
                
                // When a layer is 'selected' (via currentLayers prop).
                // &[aria-current='true'] {
                //     fill:  #62DAAB;
                // }
                
                // You can also highlight a specific layer via it's id
                &[id="il"] {
                    fill: #B4CDFF;
                }
                &[id="cn"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="eg"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="sd"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="et"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="er"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="in"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="bd"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="np"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="bt"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="tj"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="kg"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="uz"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="tm"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="az"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="tr"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="am"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="cy"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="gr"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="al"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="it"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="ly"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="td"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="cf"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="ss"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="cd"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="ke"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="ug"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="cg"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="so"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="dj"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="id"] {
                    fill: #d6d5d2;
                    stroke: white;
                }
                &[id="sa"] {
                    fill: ${(fromVuse) ? vuseSelectedCountry === 'sa' ? '#A86500' : '#62DAAB' : ''};
                }
                &[id="pk"] {
                    fill: ${(fromVelo) ? '#A86500' : ''};
                }
                &[id="bh"] {
                    fill: ${(fromVuse) ? vuseSelectedCountry === 'bh' ? '#A86500' : '#62DAAB' : ''};
                }
                &[id="kw"] {
                    fill: ${(fromVuse) ? vuseSelectedCountry === 'kw' ? '#A86500' : '#62DAAB' : ''};
                }
                &[id="ae"] {
                    fill: ${(fromVuse) ? vuseSelectedCountry === 'ae' ? '#A86500' : '#62DAAB' : ''};
                }
            }
        }
        `;

    const calculateCountriesData = (data) => {
        const finalData = {
            run_rate_actual: 0,
            run_rate_ims_actual: 0,
            run_rate_ims_target: 0,
            run_rate_target: 0,
            sum_actual: 0,
            sum_ims_actual: 0,
            sum_ims_target: 0,
            sum_target: 0,
            _id: "Gulf Cluster"
        }
        data.map((item) => {
            finalData.run_rate_actual = finalData.run_rate_actual + item.run_rate_actual
            finalData.run_rate_ims_actual = finalData.run_rate_ims_actual + item.run_rate_ims_actual
            finalData.run_rate_ims_target = finalData.run_rate_ims_target + item.run_rate_ims_target
            finalData.run_rate_target = finalData.run_rate_target + item.run_rate_target
            finalData.sum_actual = finalData.sum_actual + item.sum_actual
            finalData.sum_target = finalData.sum_target + item.sum_target
            finalData.sum_ims_actual = finalData.sum_ims_actual + item.sum_ims_actual
            finalData.sum_ims_target = finalData.sum_ims_target + item.sum_ims_target
        })
        return finalData
    }

    const onMouseEnterEvent = (id, name) => {
        if (
            id === "pk"
            || id === "af"
        ) {
            const index = clusterCalculatedData.findIndex(ind => ind._id === name)
            if (index !== -1) {
                console.log({ clusterCalculatedData });
                setSelectedCountryData(clusterCalculatedData[index])
                setShowTootltip(true)
                setShowData(true)
            } else {
                setShowTootltip(false)
                setShowData(true)
                setSelectedCountryData(null)
            }
            setHoweredCountry(name)
            setCluster(getCluster(["pk", "af", ...clusterIds]))
        } else if (
            id === "lk"
            || id === "mv"
        ) {
            const index = clusterCalculatedData.findIndex(ind => ind._id === name)
            if (index !== -1) {
                setSelectedCountryData(clusterCalculatedData[index])
                setShowTootltip(true)
                setShowData(true)
            } else {
                setShowTootltip(false)
                setShowData(true)
                setSelectedCountryData(null)
            }
            setHoweredCountry(name)
            setCluster(getCluster(["lk", "mv", ...clusterIds]))
        } else if (
            id === "ye"
            || id === "ae"
            || id === "qa"
            || id === "jo"
            || id === "lb"
            || id === "iq"
            || id === "sy"
            || id === "kw"
            || id === "bh"
            || id === "sa"
        ) {
            if (showCluster === 'MEC') {
                if (
                    id === "ye"
                    || id === "ae"
                    || id === "qa"
                    || id === "kw"
                    || id === "bh"
                ) {
                    const countriesData = clusterCalculatedData.filter((item) => {
                        if (item._id === 'Yemen') {
                            return item
                        }
                        if (item._id === 'UAE') {
                            return item
                        }
                        if (item._id === 'Qatar') {
                            return item
                        }
                        if (item._id === 'Kuwait') {
                            return item
                        }
                        if (item._id === 'Bahrain') {
                            return item
                        }
                    })
                    setSelectedCountryData(calculateCountriesData(countriesData))
                    setShowTootltip(true)
                    setShowData(true)
                    setHoweredCountry('Gulf Cluster')
                    setCluster(getCluster(['ye', 'ae', 'qa', 'kw', 'bh', ...clusterIds]))
                } else if (
                    id === "jo"
                    || id === "lb"
                ) {
                    const countriesData = clusterCalculatedData.filter((item) => {
                        if (item._id === 'Jordan') {
                            return item
                        }
                        if (item._id === 'Lebanon') {
                            return item
                        }
                    })
                    setSelectedCountryData(calculateCountriesData(countriesData))
                    setShowTootltip(true)
                    setShowData(true)
                    setHoweredCountry('Levant Cluster')
                    setCluster(getCluster(['jo', 'lb', ...clusterIds]))
                } else if (
                    id === "sa"
                ) {
                    const index = clusterCalculatedData.findIndex(ind => ind._id === name)
                    if (index !== -1) {
                        setSelectedCountryData(clusterCalculatedData[index])
                        setShowTootltip(true)
                        setShowData(true)
                    } else {
                        setShowTootltip(false)
                        setShowData(true)
                        setSelectedCountryData(null)
                    }
                    setHoweredCountry(name)
                    setCluster(getCluster(['sa', ...clusterIds]))
                } else if (
                    id === "iq"
                ) {
                    const index = clusterCalculatedData.findIndex(ind => ind._id === name)
                    if (index !== -1) {
                        setSelectedCountryData(clusterCalculatedData[index])
                        setShowTootltip(true)
                        setShowData(true)
                    } else {
                        setShowTootltip(false)
                        setShowData(true)
                        setSelectedCountryData(null)
                    }
                    setHoweredCountry(name)
                    setCluster(getCluster(['iq', ...clusterIds]))
                }
            } else {
                setHoweredCountry(name)
                const index = clusterCalculatedData.findIndex(ind => ind._id === name)
                if (index !== -1) {
                    setSelectedCountryData(clusterCalculatedData[index])
                    setShowTootltip(true)
                    setShowData(true)
                } else {
                    setShowTootltip(false)
                    setShowData(true)
                    setSelectedCountryData(null)
                }
                setCluster(getCluster(['ye', 'ae', 'qa', 'jo', 'lb', 'iq', 'sy', 'kw', 'bh', 'sa', ...clusterIds]))
            }
        }
    }

    const onMouseLeave = (target) => {
        setShowTootltip(false)
        setCluster(getCluster(clusterIds))
    }

    const countryClickFunctions = (id, apiName, clusterName, countries, countryIds) => {
        onCountryClick(id, apiName)
        setShowCluster(clusterName)
        setSelectedCountries(countries)
        if (fromVuse || fromVelo) {
            setSelectedCountriesPods(countries)
        }
        setCluster(getCluster(countryIds))
        setClusterIds(countryIds)
    }

    const MECConditions = (id) => {
        if (
            id === "ye"
            || id === "ae"
            || id === "qa"
            || id === "kw"
            || id === "bh"
        ) {
            if (id === 'ye') {
                if (
                    showCluster === 'Gulf Cluster'
                    || showCluster === 'UAE'
                    || showCluster === 'Qatar'
                    || showCluster === 'Kuwait'
                    || showCluster === 'Bahrain'
                ) {
                    setShowBrands(true)
                    getBrands('Yemen')
                    return countryClickFunctions(id, 'Yemen', 'Yemen', ['Yemen'], ['ye'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Yemen,UAE,Qatar,Kuwait,Bahrain", 'Gulf Cluster', ['Yemen', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'], ['ye', 'ae', 'qa', 'kw', 'bh'])
                }
            }
            if (id === 'qa') {
                if (
                    showCluster === 'Gulf Cluster'
                    || showCluster === 'UAE'
                    || showCluster === 'Yemen'
                    || showCluster === 'Kuwait'
                    || showCluster === 'Bahrain'
                ) {
                    setShowBrands(true)
                    getBrands('Qatar')
                    return countryClickFunctions(id, 'Qatar', 'Qatar', ['Qatar'], ['qa'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Yemen,UAE,Qatar,Kuwait,Bahrain", 'Gulf Cluster', ['Yemen', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'], ['ye', 'ae', 'qa', 'kw', 'bh'])
                }
            }
            if (id === 'kw') {
                if (
                    showCluster === 'Gulf Cluster'
                    || showCluster === 'UAE'
                    || showCluster === 'Yemen'
                    || showCluster === 'Qatar'
                    || showCluster === 'Bahrain'
                ) {
                    setShowBrands(true)
                    getBrands('Kuwait')
                    return countryClickFunctions(id, 'Kuwait', 'Kuwait', ['Kuwait'], ['kw'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Yemen,UAE,Qatar,Kuwait,Bahrain", 'Gulf Cluster', ['Yemen', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'], ['ye', 'ae', 'qa', 'kw', 'bh'])
                }
            }
            if (id === 'bh') {
                if (
                    showCluster === 'Gulf Cluster'
                    || showCluster === 'UAE'
                    || showCluster === 'Yemen'
                    || showCluster === 'Qatar'
                    || showCluster === 'Kuwait'
                ) {
                    setShowBrands(true)
                    getBrands('Bahrain')
                    return countryClickFunctions(id, 'Bahrain', 'Bahrain', ['Bahrain'], ['bh'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Yemen,UAE,Qatar,Kuwait,Bahrain", 'Gulf Cluster', ['Yemen', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'], ['ye', 'ae', 'qa', 'kw', 'bh'])
                }
            }
        } else if (
            id === "jo"
            || id === "lb"
        ) {
            if (id === 'jo') {
                if (
                    showCluster === 'Levant Cluster'
                    || showCluster === 'Lebanon'
                ) {
                    setShowBrands(true)
                    getBrands('Jordan')
                    return countryClickFunctions(id, 'Jordan', 'Jordan', ['Jordan'], ['jo'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Jordan,Lebanon", 'Levant Cluster', ['Jordan', 'Lebanon'], ['jo', 'lb'])
                }
            }
            if (id === 'lb') {
                if (
                    showCluster === 'Levant Cluster'
                    || showCluster === 'Jordan'
                ) {
                    setShowBrands(true)
                    getBrands('Lebanon')
                    return countryClickFunctions(id, 'Lebanon', 'Lebanon', ['Lebanon'], ['lb'])
                } else {
                    setShowBrands(false)
                    return countryClickFunctions(id, "Jordan,Lebanon", 'Levant Cluster', ['Jordan', 'Lebanon',], ['jo', 'lb'])
                }
            }
        } else if (
            id === "sa"
        ) {
            setShowBrands(true)
            getBrands('Saudi Arabia')
            return countryClickFunctions(id, "Saudi Arabia", 'Saudi Arabia', ['Saudi Arabia'], ['sa'])
        } else if (
            id === "iq"
        ) {
            setShowBrands(true)
            getBrands('Iraq')
            return countryClickFunctions(id, "Iraq", 'Iraq', ['Iraq'], ['iq'])
        }
    }

    const countryClick = (name, id) => {
        if (fromVelo) {
            return
        } else {
            if (fromVuse) {
                const country = id === 'sa' ? ['KSA'] : id === 'kw' ? ['KUW'] : id === 'bh' ? ['BAH'] : id === 'ae' ? ['UAE'] : selectedCountries
                setSelectedCountries(country)
                setSelectedCountriesPods(country)
                setVuseSelectedCountry(id)
            } else {

                setShowData(true)
                setSelectedCountryId(id)
                // onMouseEnter(id)

                if (
                    id === "pk"
                    || id === "af"
                ) {
                    if (id === 'pk') {
                        if (showCluster === 'Pakistan & AGBU' || showCluster === 'Afghanistan') {
                            setShowBrands(true)
                            getBrands('Pakistan')
                            countryClickFunctions(id, "Pakistan", 'Pakistan', ['Pakistan'], ['pk'])
                        } else {
                            setShowBrands(false)
                            countryClickFunctions(id, "Pakistan,Afghanistan", 'Pakistan & AGBU', ['Pakistan', 'Afghanistan'], ['pk', 'af'])
                        }
                    }
                    if (id === 'af') {
                        if (showCluster === 'Pakistan & AGBU' || showCluster === 'Pakistan') {
                            setShowBrands(true)
                            getBrands('Afghanistan')
                            countryClickFunctions(id, "Afghanistan", 'Afghanistan', ['Afghanistan'], ['af'])
                        } else {
                            setShowBrands(false)
                            countryClickFunctions(id, "Pakistan,Afghanistan", 'Pakistan & AGBU', ['Pakistan', 'Afghanistan'], ['pk', 'af'])
                        }
                    }
                } else if (
                    id === "lk"
                    || id === "mv"
                ) {
                    if (id === 'lk') {
                        if (showCluster === 'Sri Lanka & Maldives' || showCluster === 'Maldives') {
                            setShowBrands(true)
                            getBrands('Sri Lanka')
                            countryClickFunctions(id, "Sri Lanka", 'Sri Lanka', ['Sri Lanka'], ['lk'])
                        } else {
                            setShowBrands(false)
                            countryClickFunctions(id, "Sri Lanka,Maldives", 'Sri Lanka & Maldives', ['Sri Lanka', 'Maldives'], ['lk', 'mv'])
                        }
                    }
                    if (id === 'mv') {
                        if (showCluster === 'Sri Lanka & Maldives' || showCluster === 'Sri Lanka') {
                            setShowBrands(true)
                            getBrands('Maldives')
                            countryClickFunctions(id, "Maldives", 'Maldives', ['Maldives'], ['mv'])
                        } else {
                            setShowBrands(false)
                            countryClickFunctions(id, "Sri Lanka,Maldives", 'Sri Lanka & Maldives', ['Sri Lanka', 'Maldives'], ['lk', 'mv'])
                        }
                    }
                } else if (
                    id === "ir"
                ) {
                    setShowBrands(true)
                    getBrands('Iran')
                    countryClickFunctions(id, "Iran", 'Iran', ['Iran'], ['ir'])
                } else if (
                    id === "ye"
                    || id === "ae"
                    || id === "qa"
                    || id === "jo"
                    || id === "lb"
                    || id === "iq"
                    || id === "sy"
                    || id === "kw"
                    || id === "bh"
                    || id === "sa"
                ) {
                    if (showCluster === 'MEC') {
                        MECConditions(id)
                    } else if (
                        showCluster === "Gulf Cluster"
                        || showCluster === 'UAE'
                        || showCluster === 'Yemen'
                        || showCluster === 'Qatar'
                        || showCluster === 'Kuwait'
                        || showCluster === 'Bahrain'
                    ) {
                        MECConditions(id)
                    } else if (
                        showCluster === "Levant Cluster"
                        || showCluster === 'Jordan'
                        || showCluster === 'Lebanon'
                    ) {
                        MECConditions(id)
                    } else if (showCluster === "Saudi Arabia") {
                        MECConditions(id)
                    } else if (showCluster === "Iraq") {
                        MECConditions(id)
                    } else {
                        setShowBrands(false)
                        countryClickFunctions(
                            id,
                            "Yemen,UAE,Qatar,Jordan,Lebanon,Iraq,Syria,Kuwait,Bahrain,Saudi Arabia",
                            'MEC',
                            // ['Yemen', 'UAE',  'Qatar', 'Jordan', 'Lebanon', 'Iraq', 'Syria', 'Kuwait', 'Bahrain', 'Saudi Arabia'],
                            ['Levant Cluster', 'Iraq', 'Saudi Arabia', 'Gulf Cluster'],
                            ['ye', 'ae', 'qa', 'jo', 'lb', 'iq', 'sy', 'kw', 'bh', 'sa'])
                    }
                }
            }
        }
    }

    useEffect(() => {
        if (fromVelo) {
            setCluster(getCluster(['pk']))
        } else if (fromVuse) {
            setCluster(getCluster(['sa', 'ae', 'kw', 'bh']))
        }
    }, [])

    const onMouseEnter = (id, name) => {
        if (fromVelo || fromVuse) {
            return
        } else {
            onMouseEnterEvent(id, name)
        }
    }

    const layerProps = {
        onMouseEnter: ({ target }) => onMouseEnter(target.attributes.id.value, target.attributes.name.value),
        onMouseLeave: ({ target }) => !(fromVelo || fromVuse) && onMouseLeave(target),
        onBlur: ({ target }) => setFocused('None'),
        onFocus: ({ target }) => countryClick(target.attributes.name.value, target.attributes.id.value),
        onClick: ({ target }) => countryClick(target.attributes.name.value, target.attributes.id.value),
    };

    const mapCords = {
        ...WORLD,
        viewBox
    }

    return (
        <div>
            <Map>
                {
                    !(fromVelo || fromVuse) &&
                    // <MouseTooltip
                    //     visible={showTootltip}
                    //     offsetX={15}
                    //     offsetY={10}
                    //     className='zIndex'
                    // >
                    <Tooltip message="This is a tooltip message">
                        <div style={{ padding: "16px 24px 16px 24px", width: "250px", backgroundColor: "#FFFFFF" }}>
                            {
                                isLoading ?
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "20px 0 20px 0" }}>
                                        <Space size="middle">
                                            <Spin size="large" />
                                        </Space>
                                    </div>
                                    :
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div style={{ paddingBottom: "10px", borderBottom: "1px solid #CACACA", display: "flex", flexDirection: "column" }}>
                                            <Text style={{ fontSize: "14px", fontWeight: "600" }} >{showCluster}</Text>
                                            {
                                                showCluster !== howeredCountry
                                                && <Text style={{ fontSize: "14px", opecity: 0.5 }} >{howeredCountry}</Text>
                                            }
                                        </div>
                                        {
                                            showData &&
                                            <div style={{ display: "flex", flexDirection: "column", paddingTop: "5px" }}>
                                                <div style={{ width: "100%", padding: "5px 0 5px 0", display: "flex", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "rgba(0, 0, 0, 0.45)" }} >FY Target:</Text>
                                                    <div>
                                                        <Text style={{ fontWeight: "600", marginRight: "10px" }} > {parseFloat(selectedCountryData?.sum_target).toFixed(2)}</Text>
                                                        <Text style={{ fontWeight: "600", opacity: 0.5 }} > Mn</Text>
                                                    </div>
                                                </div>
                                                <div style={{ width: "100%", padding: "5px 0 5px 0", display: "flex", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "rgba(0, 0, 0, 0.45)" }} >Current RR:</Text>
                                                    <div>
                                                        {/* <Text style={{ fontWeight: "600", marginRight: "10px" }} > {(selectedCountryData?.sum_actual / data.length).toFixed(0)}</Text> */}
                                                        <Text style={{ fontWeight: "600", marginRight: "10px" }} > {parseFloat(showRunrateIms ? selectedCountryData?.run_rate_ims_actual : selectedCountryData?.run_rate_actual).toFixed(2)}</Text>
                                                        <Text style={{ fontWeight: "600", opacity: 0.5 }} > Mn</Text>
                                                    </div>
                                                </div>
                                                <div style={{ width: "100%", padding: "5px 0 5px 0", display: "flex", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "rgba(0, 0, 0, 0.45)" }} >Target RR:</Text>
                                                    <div>
                                                        <Text style={{ fontWeight: "600", marginRight: "10px" }} > {parseFloat(showRunrateIms ? selectedCountryData?.run_rate_ims_target : selectedCountryData?.run_rate_target).toFixed(2)}</Text>
                                                        <Text style={{ fontWeight: "600", opacity: 0.5 }} > Mn</Text>
                                                    </div>
                                                </div>
                                                <div style={{ width: "100%", padding: "5px 0 5px 0", display: "flex", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "rgba(0, 0, 0, 0.45)" }} >FY Projection:</Text>
                                                    <div>
                                                        <Text style={{ fontWeight: "600", marginRight: "10px" }} > {parseFloat(selectedCountryData?.sum_actual).toFixed(2)}</Text>
                                                        <Text style={{ fontWeight: "600", opacity: 0.5 }} > Mn</Text>
                                                    </div>
                                                </div>
                                                <div style={{ width: "100%", padding: "5px 0 5px 0", display: "flex", justifyContent: "space-between" }}>
                                                    <Text style={{ color: "rgba(0, 0, 0, 0.45)" }} >FY vs Target:</Text>
                                                    <div>
                                                        <Text style={{ fontWeight: "600", marginRight: "10px" }} > {parseFloat(selectedCountryData?.sum_actual - selectedCountryData?.sum_target).toFixed(2)}</Text>
                                                        <Text style={{ fontWeight: "600", opacity: 0.5 }} > Mn</Text>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                            }
                        </div>
                    </Tooltip>

                    // </MouseTooltip>
                }
                <div style={{ position: 'relative' }}>
                    <div className="reloadIcon">
                        <Button onClick={reloadData} icon={<ReloadOutlined />} >Reset</Button>
                    </div>
                    {
                        !(fromVelo || fromVuse) &&
                        <>
                            <div className="flag-pk flag-wraper">
                                <img onClick={() => countryClick('Pakistan', 'pk')} src={flagPK} className="flag" />
                            </div>
                            <div className="flag-af flag-wraper">
                                <img onClick={() => countryClick('Afghanistan', 'af')} src={flagAF} className="flag" />
                            </div>
                            <div className="flag-ir flag-wraper">
                                <img onClick={() => countryClick('Iran', 'ir')} src={flagIR} className="flag" />
                            </div>
                            <div className="flag-iq flag-wraper">
                                <img onClick={() => countryClick('Iraq', 'iq')} src={flagIQ} className="flag" />
                            </div>
                            <div className="flag-jo flag-wraper">
                                <img onClick={() => countryClick('Jordan', 'jo')} src={flagJO} className="flag" />
                            </div>
                            <div className="flag-lb flag-wraper">
                                <img onClick={() => countryClick('Lebanon', 'lb')} src={flagLB} className="flag" />
                            </div>
                            <div className="flag-sa flag-wraper">
                                <img onClick={() => countryClick('Saudi Arabia', 'sa')} src={flagSA} className="flag" />
                            </div>
                            <div className="flag-ye flag-wraper">
                                <img onClick={() => countryClick('Yemen', 'ye')} src={flagYE} className="flag" />
                            </div>
                            <div className="flag-ae flag-wraper">
                                <img onClick={() => countryClick('UAE', 'ae')} src={flagAE} className="flag" />
                            </div>
                            <div className="flag-qa flag-wraper">
                                <img onClick={() => countryClick('Qatar', 'qa')} src={flagQA} className="flag" />
                            </div>
                            <div className="flag-lk flag-wraper">
                                <img onClick={() => countryClick('Sri Lanka', 'lk')} src={flagLK} className="flag" />
                            </div>
                            <div className="flag-mv flag-wraper">
                                <img onClick={() => countryClick('Maldives', 'mv')} src={flagMV} className="flag" />
                            </div>
                        </>
                    }
                    {
                        fromVuse &&
                        <>
                            <div className="flag-sa flag-wraper">
                                <img onClick={() => countryClick('Saudi Arabia', 'sa')} src={flagSA} className="flag" />
                            </div>
                            <div className="flag-ae-vuse flag-wraper">
                                <img onClick={() => countryClick('UAE', 'ae')} src={flagAE} className="flag" />
                            </div>
                            <div className="flag-kw flag-wraper">
                                <img onClick={() => countryClick('Kuwait', 'kw')} src={flagKW} className="flag" />
                            </div>
                            <div className="flag-bh flag-wraper">
                                <img onClick={() => countryClick('UAE', 'bh')} src={flagBH} className="flag" />
                            </div>
                        </>
                    }
                    {
                        fromVelo &&
                        <>
                            <div className="flag-pk-vuse flag-wraper">
                                <img onClick={() => countryClick('Pakistan', 'pk')} src={flagPK} className="flag" />
                            </div>
                        </>
                    }
                    <VectorMap {...mapCords} layerProps={layerProps} />
                </div>
            </Map>
        </div>
    )
}
