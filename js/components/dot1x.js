Vue.component('dot1x', {
    props: ['config'],
    template: `
        <div>
            <h3>Step 6: 802.1X Settings</h3>
            <div class="help-section">
                <h5>Help</h5>
                <p><strong>Enable 802.1X:</strong> Enable port-based authentication using 802.1X. Required for secure access control.</p>
                <p><strong>Critical EAPOL:</strong> Enable to handle critical EAPOL packets during server unavailability.</p>
                <p><strong>Recovery Delay:</strong> Delay (in ms) before attempting recovery after a failure (default: 2000).</p>
                <p><strong>Authentication Order:</strong> Order of authentication methods (dot1x, MAB). 'dot1x, mab' tries 802.1X first.</p>
                <p><strong>Host Mode:</strong> Mode for handling multiple hosts on a port (e.g., Multi-Domain for voice and data).</p>
                <p><strong>Enable VLAN Assignment:</strong> Assign VLANs dynamically based on authentication results.</p>
                <p><strong>Guest VLAN:</strong> VLAN for unauthenticated users (e.g., 100).</p>
                <p><strong>Auth-Fail VLAN:</strong> VLAN for failed authentications (e.g., 99).</p>
                <p><strong>Critical VLAN:</strong> VLAN when the server is unavailable (e.g., 98).</p>
                <p><strong>TX Period:</strong> Time (in seconds) between EAPOL frame transmissions (default: 10).</p>
                <p><strong>Max Reauth Requests:</strong> Maximum number of re-authentication attempts (default: 2).</p>
                <p><strong>Interface:</strong> The interface to apply 802.1X settings (e.g., GigabitEthernet1/0/1).</p>
                <p><strong>VLAN:</strong> The access VLAN for the interface (e.g., 10).</p>
                <p><strong>Reauthentication Period:</strong> Time (in seconds) between re-authentications (default: 3600).</p>
            </div>
            <label class="form-label">Enable 802.1X:</label>
            <select class="form-select" v-model="config.dot1x.enable" @change="$emit('update:config', config)">
                <option value="1">Yes</option>
                <option value="2">No</option>
            </select>
            <div v-if="config.dot1x.enable === '1'">
                <label class="form-label">Critical EAPOL:</label>
                <select class="form-select" v-model="config.dot1x.criticalEapol" @change="$emit('update:config', config)">
                    <option value="1">Enable</option>
                    <option value="2">Disable</option>
                </select>
                <label class="form-label">Recovery Delay (ms):</label>
                <input type="number" class="form-control" v-model="config.dot1x.recoveryDelay" placeholder="2000" @input="$emit('update:config', config)">
                <label class="form-label">Authentication Order:</label>
                <select class="form-select" v-model="config.dot1x.authOrder" @change="$emit('update:config', config)">
                    <option value="1">dot1x, mab</option>
                    <option value="2">mab, dot1x</option>
                </select>
                <label class="form-label">Host Mode:</label>
                <select class="form-select" v-model="config.dot1x.hostMode" @change="$emit('update:config', config)">
                    <option value="1">Single-Host</option>
                    <option value="2">Multi-Auth</option>
                    <option value="3">Multi-Domain</option>
                    <option value="4">Multi-Host</option>
                </select>
                <label class="form-label">Enable VLAN Assignment:</label>
                <select class="form-select" v-model="config.dot1x.vlanAssign" @change="$emit('update:config', config)">
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
                <div v-if="config.dot1x.vlanAssign === '1'">
                    <label class="form-label">Guest VLAN:</label>
                    <input type="number" class="form-control" v-model="config.dot1x.guestVlan" placeholder="e.g., 100" @input="$emit('update:config', config)">
                    <label class="form-label">Auth-Fail VLAN:</label>
                    <input type="text" class="form-control" v-model="config.dot1x.authFailVlan" placeholder="e.g., 99" @input="$emit('update:config', config)">
                    <label class="form-label">Critical VLAN:</label>
                    <input type="number" class="form-control" v-model="config.dot1x.criticalVlan" placeholder="e.g., 98" @input="$emit('update:config', config)">
                </div>
                <label class="form-label">TX Period (seconds):</label>
                <input type="number" class="form-control" v-model="config.dot1x.txPeriod" placeholder="10" @input="$emit('update:config', config)">
                <label class="form-label">Max Reauth Requests:</label>
                <input type="number" class="form-control" v-model="config.dot1x.maxReauth" placeholder="2" @input="$emit('update:config', config)">
                <label class="form-label">Interface:</label>
                <input type="text" class="form-control" v-model="config.dot1x.interface" placeholder="e.g., GigabitEthernet1/0/1" @input="$emit('update:config', config)">
                <label class="form-label">VLAN:</label>
                <input type="number" class="form-control" v-model="config.dot1x.vlan" placeholder="e.g., 10" @input="$emit('update:config', config)">
                <label class="form-label">Reauthentication Period (seconds):</label>
                <input type="number" class="form-control" v-model="config.dot1x.reauthPeriod" placeholder="3600" @input="$emit('update:config', config)">
            </div>
            <div class="step-navigation">
                <button @click="$parent.currentStep = 'tacacs'">Previous</button>
                <button @click="$emit('next-step')" :disabled="config.dot1x.enable === '1' && (!config.dot1x.interface || !config.dot1x.vlan)">Next</button>
            </div>
        </div>
    `
});
