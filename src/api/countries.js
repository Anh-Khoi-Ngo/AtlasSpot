const BASE_URL = 'https://restcountries.com/v3.1';

export async function getAllCountries() {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,capital,currencies,flags,population,region,languages,subregion,timezones,maps,car,flags`
    );
    if (!response.ok) throw new Error('Failed to fetch countries');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
}

export async function getCountryByName(name) {
  try {
    const response = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}`);
    if (!response.ok) throw new Error('Country not found');
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error('Error fetching country:', error);
    return null;
  }
}

export async function getCountriesByRegion(region) {
  try {
    const response = await fetch(
      `${BASE_URL}/region/${encodeURIComponent(region)}?fields=name,capital,currencies,flags,population,region,languages,subregion`
    );
    if (!response.ok) throw new Error('Failed to fetch countries by region');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries by region:', error);
    return [];
  }
}

export async function searchCountries(query) {
  try {
    const response = await fetch(
      `${BASE_URL}/name/${encodeURIComponent(query)}?fields=name,capital,currencies,flags,population,region,languages,subregion`
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching countries:', error);
    return [];
  }
}